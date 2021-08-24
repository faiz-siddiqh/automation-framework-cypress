/// <reference types="cypress" />

Cypress.Commands.add("buyProduct", (ProductName) => {
  cy.get("app-card.col-lg-3.col-md-6.mb-3").each((element, index) => {
    if (element.find("h4.card-title a").text() === ProductName)
      cy.get("button.btn.btn-info").eq(index).click();
  });
});
Cypress.Commands.add("checkOut", () => {
  cy.get("a.nav-link.btn.btn-primary").click();
  cy.get(".btn.btn-success").click();
  cy.get("#country").type("ind");
  cy.wait(3000);
  cy.get(".suggestions a").each((country, index) => {
    if (country.text() === "India") cy.get(".suggestions a").eq(index).click();
  });
  cy.get(".checkbox > label").click();
  cy.get(".btn.btn-success.btn-lg").click();
});

Cypress.Commands.add("verifyMessage", (locator, expectedMessage) => {
  cy.get(locator).then((element) => {
    expect(element.text()).to.include(expectedMessage);
  });
});
