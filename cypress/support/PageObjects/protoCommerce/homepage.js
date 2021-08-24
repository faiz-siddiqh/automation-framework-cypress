/// <reference types="cypress" />
import data from "../../../fixtures/protoCommerce.testdata.json";

const nameLocator = ":nth-child(1) > .form-control";
const emailLocator = ":nth-child(2) > .form-control";
const passwordLocator = "#exampleInputPassword1";
const genderLocator = "#exampleFormControlSelect1";
const employmentStatusLocator = "label.form-check-label";
const checkBox = "input.form-check-input";
const submitBtn = ".btn";
const sucessMessageLoc = ".alert";

class Homepage {
  signUp() {
    cy.get(nameLocator).type(data.name);
    cy.get(emailLocator).type(data.email);
    cy.get(passwordLocator).type(data.password);
    cy.get(genderLocator).select(data.gender).should("have.value", data.gender);
    cy.get(employmentStatusLocator).each((element, index) => {
      var status = element.text();
      if (status.includes(data.employmentStatus))
        cy.get(checkBox).eq(index).check().should("be.checked");
    });
    cy.get(submitBtn).click();
    cy.verifyMessage(sucessMessageLoc, data.successMessage);
  }
}

export default Homepage;
