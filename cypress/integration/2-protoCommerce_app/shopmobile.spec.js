/// <reference types="cypress" />
import ShopPage from '../../support/PageObjects/protoCommerce/shopPage';



describe('SignUp as a new username into the website',()=>{
let data;
let shopPage;
    before(function(){
        cy.fixture('protoCommerce.testdata').then((testdata)=>{
             data=testdata;
         });        
         shopPage=new ShopPage();
     });

    it('Shop Device and CheckOut',()=>{
        cy.visit(Cypress.env('baseUrl')+'angularpractice/shop');
        shopPage.purchaseDevice();
    });


});