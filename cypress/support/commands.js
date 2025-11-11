//Comando Login
Cypress.Commands.add("login", (dados = { usuario: "", senha: "" }) => {
  cy.get("#username").type(dados.usuario);
  cy.get("#password").type(dados.senha);
  cy.get("button[type='submit']").click();
});
