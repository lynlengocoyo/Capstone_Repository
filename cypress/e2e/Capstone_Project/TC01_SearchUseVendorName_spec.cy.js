// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
    //  beforeEach(()=>{

   //     cy.log(`Executing the Before each`)
     //   cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
     //   cy.viewport(1200, 1200)


    it('Execute Vendors and perform search using vendor name', ()=> {

        //Launch NopCommerce app
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

        //Login by Custom command
        cy.login(data.email,data.pass)

        //Page title validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

        //Dashboard navigation - Customer
        cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
        
        //Navigation to Vendor menu item
        cy.get('.menu-open > .nav > :nth-child(4) > .nav-link').click()

        //Search via Vendor name
        cy.get('#SearchName').clear().type(data.Vendor_Name)

        //Perform click to search button
        cy.get('#search-vendors').click()

        //Perform click to Logout button
       // cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()

        //Perform screenshot
        cy.screenshot()
    })

})