/// <reference types="cypress" />
import HomePage from "../../support/PageObjects/protoCommerce/homepage";
describe("SignUp as a new username into the website", () => {
  let data;
  let homepage;
  before(function () {
    cy.fixture("protoCommerce.testdata").then((testdata) => {
      data = testdata;
    });
    homepage = new HomePage();
  });

  it("SignUp using valid credentials", () => {
    cy.visit(Cypress.env("baseUrl") + "angularpractice/");
    homepage.signUp();
  });

  // it("check database connection", () => {
  //   cy.sqlServer(`SELECT * FROM products`).then((results) => {
  //     results.forEach((result) => {
  //       console.log(result);
  //     });
  //   });
  // });
});
