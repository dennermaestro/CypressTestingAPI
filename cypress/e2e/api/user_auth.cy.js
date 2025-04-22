import { faker } from '@faker-js/faker';

describe('API - Cenário 1: Criar e autenticar usuário', () => {
  const user = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    administrador: 'true'
  };

  before(() => {
    // Cria o user antes dos testes
    cy.request('POST', '/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.include('Cadastro realizado com sucesso');
      expect(res.body._id).to.exist;
    });
  });

  it('Autenticar o usuário com sucesso', () => {
    cy.request('POST', '/login', {
      email: user.email,
      password: user.password
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Login realizado com sucesso');
      expect(res.body.authorization).to.not.be.empty;
    });
  });
});
