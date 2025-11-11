describe("Testes de Login do MiniShop", () => {
  beforeEach(() => {
    cy.fixture("usuarios").its("usuarioValido").as("usuarioValido");
    cy.fixture("usuarios").its("usuarioInvalido").as("usuarioInvalido");
    cy.visit("./html/index.html");
  });

  it("Verifica o tipo da aba da página", () => {
    cy.title().should("be.eq", "MiniShop - Login");
  });

  it("Login com campos em branco", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get("button[type='submit']").click();
    //Asserção
    cy.get("div[role='alert']").should("be.visible");
    cy.get("div[role='alert']").should(
      "contain",
      "Usuário ou senha inválidos."
    );
  });

  it("Login com dados incorretos", () => {
    cy.get("@usuarioInvalido").then((usuario) => {
      cy.login({ usuario: usuario.username, senha: usuario.password });
    });

    cy.get("div[role='alert']").should("be.visible");
  });
  it("Login com dados corretos", () => {
    cy.get("@usuarioValido").then((usuario) => {
      cy.login({ usuario: usuario.username, senha: usuario.password });
    });
    cy.contains("button", "Sair").should("exist");
    cy.title().should("be.eq", "MiniShop - Home");
  });
});
