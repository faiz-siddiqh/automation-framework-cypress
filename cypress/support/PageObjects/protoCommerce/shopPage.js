/// <reference types="cypress" />
import data from "../../../fixtures/protoCommerce.testdata.json";

const productsList = "app-card.col-lg-3.col-md-6.mb-3";
const deviceTitle = "h4.card-title a";
const addToCartBtn = "button.btn.btn-info";
const checkOutBtn = "a.nav-link.btn.btn-primary";
const proceedBtn = ".btn.btn-success";
const locationTextBox = "#country";
const countriesList = ".suggestions a";
const checkBox = ".checkbox > label";
const purchaseBtn = ".btn.btn-success.btn-lg";

class ShopPage {
  purchaseDevice() {
    data.productsToBuy.forEach((product) => {
      this.buyProduct(product);
    });
    this.checkOut();
  }

  buyProduct(productName) {
    cy.get(productsList).each((element, index) => {
      if (element.find(deviceTitle).text() === productName)
        cy.get(addToCartBtn).eq(index).click();
    });
  }

  checkOut() {
    cy.get(checkOutBtn).click();
    cy.get(proceedBtn).click();
    cy.get(locationTextBox).type(data.countryToBeDelivered.substring(0, 3));
    Cypress.config("defaultCommandTimeout", 8000); //overriding the commandtimeout from cypress.json .
    cy.get(countriesList).each((country, index) => {
      if (country.text() === data.countryToBeDelivered)
        cy.get(countriesList).eq(index).click();
    });
    cy.get(checkBox).click();
    cy.get(purchaseBtn).click();
  }
}

export default ShopPage;
