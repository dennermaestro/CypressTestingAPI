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

1. Cadastro e adição de produto a Lista de Compras

-Cadastrar novo usuário
-Logado automaticamente na UI
-Pesquisa pelo produto específico
-Adiciona produto a lista de compras
-Retorna a Home
-Finaliza sessão


2. Busca e validação de produto na lista de Compras

-Cadastrar novo usuário
-Logado automaticamente na UI
-Pesquisa pelo produto
-Adiciona produto a lista de compras
-Consulta produto na lista de compras
-Retorna a Home
-Finaliza sessão


3. Remoção e adição de novo produto

-Cadastrar novo usuário
-Logado automaticamente na UI
-Pesquisa pelo produto
-Adiciona produto a lista de compras
-Consulta produto na lista de compras
-Remova produto na lista de compras
-Retorna a Home
-Pesquisa novo produto e adicione um novo
-Consulta produto na lista de compras
-Finaliza sessão



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


