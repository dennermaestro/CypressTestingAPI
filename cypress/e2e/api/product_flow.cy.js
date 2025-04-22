import { faker } from '@faker-js/faker';

describe('API - Cenário 2: Criar e listar produto', () => {
  let token;
  let product;

  before(() => {
    // Autenticar como admin
    cy.request('POST', 'https://serverest.dev/login', {
      email: 'fulano@qa.com',       // usuário admin real da swagger disponível
      password: 'teste'
    }).then((res) => {
      expect(res.status).to.eq(200);
      token = res.body.authorization;
    });

    // Gerar dados de produto aleatório
    product = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 100, max: 1000 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 50 })
    };
  });

  it('Deve criar um novo produto com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        Authorization: token
      },
      body: product
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.include('Cadastro realizado com sucesso');
    });
  });

  it('Listar produtos e encontrar o que foi criado', () => {
    cy.request('GET', 'https://serverest.dev/produtos').then((res) => {
      expect(res.status).to.eq(200);
      const produtoEncontrado = res.body.produtos.find((p) => p.nome === product.nome);
      expect(produtoEncontrado).to.exist;
      expect(produtoEncontrado).to.have.property('preco', product.preco);
    });
  });
});
