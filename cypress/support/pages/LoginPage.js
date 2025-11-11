// export class LoginPage {
//   //acoes
//   login(usuario, senha) {
//     cy.login({ usuario: usuario, senha: senha });
//   }
// }
export class LoginPage {
  visitar() {
    cy.visit("./html/index.html");
  }

  login(usuario, senha) {
    this.visitar();
    cy.login({ usuario, senha });
  }
}
