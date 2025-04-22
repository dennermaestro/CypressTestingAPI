 💻  - Automação com Cypress para API

Este projeto tem como objetivo validar cenários de ponta a ponta (E2E) da API da aplicação ServeRest, utilizando o framework Cypress com a linguagem JavaScript.

Foram desenvolvidos 3 cenários automatizados de testes de API, cobrindo fluxo de autenticação, manipulação de produtos e carrinho de compras, organizados de forma clara com uso de boas práticas e dados dinâmicos.

[Swagger](https://serverest.dev//)



 Tecnologia utilizada
 
 Cypress

---

#Walkthrough

Setup

1. Instale as dependências 

npm install

2. Execute a interface do Cypress

npx cypress open

3. Execute em modo headless (OPCIONAL)

npx cypress run



Setup para Git

1. Clone o repositório:
   ```bash
   git clone https://github.com/dennermaestro/CypressTestingAPI
  

2. Execute o projeto no todo utilizando npx cypress open - Listando item a item


#Estrutura do Projeto

```

```

---

 ✅ Cenários Automatizados

Cenário 1 - Criar e autenticar usuário

1. Gerar dinamicamente um usuário com nome, e-mail e senha

2. Enviar um POST /usuarios para cadastrá-lo

3. Validar status 201 e mensagem de sucesso

4. Realizar um POST /login com as credenciais recém-criadas

5. Validar status 200, mensagem de sucesso e recebimento do token

Cenário 2 - Criar e listar produto

1. Autenticar um usuário administrador

2. Gerar dinamicamente um novo produto

3. Criar produto via POST /produtos, utilizando o token no header

4. Validar status 201 e mensagem de cadastro

5. Listar todos os produtos via GET /produtos

6. Verificar se o produto criado aparece corretamente na lista

Cenário 3 - Criar e cancelar carrinho

1. Criar e autenticar um novo usuário comum

2. Autenticar um usuário administrador para cadastrar um produto

3. Criar um novo produto via POST /produtos

4. Criar carrinho com esse produto usando POST /carrinhos

5. Validar status 201 e mensagem de sucesso

6. Cancelar o carrinho com DELETE /carrinhos/cancelar-compra

7. Validar status 200 e mensagem de confirmação de remoção


------
 Best Practices

 Dados dinâmicos com uso da biblioteca @faker-js/faker

Separação de testes de API em sua própria pasta (/api)

Isolamento de credenciais e dados sensíveis em cypress.env.json

Validações assertivas de status HTTP, mensagens e resposta

Organização limpa, sem dependência do frontend

---
📌 Observações

- Projeto 100% funcional com Cypress v14.3.1
- Utilizado BDD + JavaScript
- Compatível com Node.js v18

Desenvolvido por Denner Santana


