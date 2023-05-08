// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })


    it.skip('Execute Vendors and perform search using vendor name', ()=> {

        //cy.login('admin@yourstore.com','admin')
        cy.login(data.email,data.pass)

        cy.title().should('eq', 'Dashboard / nopCommerce administration')

        cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
        
        cy.get('.menu-open > .nav > :nth-child(4) > .nav-link').click()

        cy.get('#SearchName').clear().type(data.Vendor_Name)

        cy.get('#search-vendors').click()

        cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()


        cy.screenshot
    })

})