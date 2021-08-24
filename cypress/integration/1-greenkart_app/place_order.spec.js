/// <reference types="cypress" />
import LandingPage from "../../support/PageObjects/greenKart/landingPage";
import CartPage from "../../support/PageObjects/greenKart/cartPage";

let data;
let landingPage;
let cartPage;

describe("Place an order", () => {
  before(() => {
    cy.fixture("greenKart.testdata").then((testdata) => {
      data = testdata;
    });
    landingPage = new LandingPage();
    cartPage = new CartPage();
  });
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl") + "seleniumPractise/#/");
  });

  it("Buy Vegetables and verify the price at the checkout", () => {
    landingPage.buyVegetables();
    cartPage.placeOrder();
  });
});
