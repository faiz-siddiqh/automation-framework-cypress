/// <reference types="cypress" />
import data from "../../../fixtures/greenKart.testdata.json";

const searchBar = ".search-keyword";
const products = ".product:visible";
const incrementItem = "a.increment";
const decrementItem = "a.decrement";
const checkOutIcon = ".cart-icon > img";
const isCartEmpty = ".empty-cart h2:visible";
const proceedToCheckOut = ".cart-preview > .action-block > button";

class LandingPage {
  buyVegetables() {
    const items = Object.keys(data.vegetablesToBuy);
    //looping through each item and adding it to the cart with the no of itemsF
    items.forEach((item) => {
      let noOfItems = Number(data.vegetablesToBuy[item]);
      this.addToCart(item, noOfItems);
    });
    this.checkOut();
  }

  addToCart(item, noOfItems) {
    cy.get(searchBar).clear().type(item);
    cy.get(products).as("productsLocator"); //this is similar to saving the locator in a variable --this is called alias
    cy.get("@productsLocator").should("have.length", 1); //searched product must be availble else fail
    while (noOfItems > 1) {
      cy.get("@productsLocator").find(incrementItem).click();
      noOfItems--;
    }
    if (noOfItems > 0) cy.contains("ADD TO CART").click();
  }

  checkOut() {
    cy.get(checkOutIcon).click();
    cy.get(isCartEmpty).should("not.have.length", "1"); //checking if cart is empty
    cy.get(proceedToCheckOut).click();
  }
}

export default LandingPage;
