/// <reference types="cypress" />
import { expect } from 'chai';
import data from '../../../fixtures/greenKart.testdata.json';

const productsTable='tbody tr td:nth-child(5)';
const totalAmount='.discountAmt';
const checkBox='.chkAgree';



class CartPage{

    placeOrder(){

     this.verifyTheAmountDisplayed();
     this.selectCountry(data.country);

    } 
    
    verifyTheAmountDisplayed(){
        let expectedAmount=0;
        cy.get(productsTable).each((product)=>{
            expectedAmount+= Number(product.text());
           cy.log(expectedAmount);
        });
        cy.get(totalAmount).each((element)=>{
            let actualAmount=Number(element.text());
            expect(expectedAmount).to.be.equal(actualAmount);
            });   
        cy.contains('Place Order').click();
    }

    selectCountry(country){
        cy.get('select').select(country).should('have.value',country);  
        cy.get(checkBox).check().should('be.checked'); //to check a checkbox and asserting the same       
        cy.contains('Proceed').click();
    }

    
    
}

export default CartPage;