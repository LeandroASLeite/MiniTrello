import { HomePage } from "../support/pages/HomePage";
import { LoginPage } from "../support/pages/LoginPage";

describe("Página Home da Aplicação Minishop", () => {
  const home = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture("usuarios").as("usuarios");
    cy.get("@usuarios").then((usuarios) => {
      const usuario = usuarios.usuarioValido;
      home.visitar();
      loginPage.login(usuario.username, usuario.password);
    });
  });

  it("DEVE EXIBIR O TITULO CORRETO", () => {
    home.verificarTitulo();
  });
});
