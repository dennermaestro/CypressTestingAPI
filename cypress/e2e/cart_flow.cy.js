import { faker } from '@faker-js/faker';

describe('API - Cenário 3: Criar e cancelar carrinho', () => {
  let token;
  let productId;
  let user = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    administrador: 'false'
  };

  const adminEmail = Cypress.env('admin_email');
  const adminPassword = Cypress.env('admin_password');

  before(() => {
    // Criar usuário comum
    cy.request('POST', 'https://serverest.dev/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);
    });

    // Autenticar o user comum
    cy.request('POST', 'https://serverest.dev/login', {
      email: user.email,
      password: user.password
    }).then((res) => {
      expect(res.status).to.eq(200);
      token = res.body.authorization;
    });

    // Criar produto com conta admin
    cy.request('POST', 'https://serverest.dev/login', {
      email: adminEmail,
      password: adminPassword
    }).then((res) => {
      const adminToken = res.body.authorization;

      const produto = {
        nome: faker.commerce.productName(),
        preco: faker.number.int({ min: 50, max: 500 }),
        descricao: faker.commerce.productDescription(),
        quantidade: 10
      };

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: { Authorization: adminToken },
        body: produto
      }).then((res) => {
        expect(res.status).to.eq(201);
        productId = res.body._id;
      });
    });
  });

  it('Criar um carrinho com sucesso', () => {
    const carrinho = {
      produtos: [
        {
          idProduto: productId,
          quantidade: 1
        }
      ]
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      headers: { Authorization: token },
      body: carrinho
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.include('Cadastro realizado com sucesso');
    });
  });

  it('Cancelar o carrinho com sucesso', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/carrinhos/cancelar-compra',
      headers: { Authorization: token }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.include('Registro excluído com sucesso');
    });
  });
});
