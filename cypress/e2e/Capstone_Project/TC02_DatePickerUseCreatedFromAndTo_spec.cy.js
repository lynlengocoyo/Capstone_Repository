// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
     // beforeEach(()=>{

        //cy.log(`Executing the Before each`)
        

    //})

    it('Date picker', ()=> {

      //Launch NopCommerce app
      cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
      cy.viewport(1200, 1200)

      //Login by Custom command
      cy.login(data.email,data.pass)
    
      //Page title validation
      cy.title().should('eq', 'Dashboard / nopCommerce administration')
    
      //Dashboard navigation - Customer
      cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
    
      //Navigation to Activity menu item
      cy.get('.menu-open > .nav > :nth-child(5) > .nav-link').click()
    
      //Input date in Created From
      cy.get('#CreatedOnFrom').clear().type(data.start)

      //Input date in Created To
      cy.get('#CreatedOnTo').clear().type(data.end)
    
      //Perform click to search button
      cy.get('#search-log').click()
    
      //cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      //Perform screenshot
      cy.screenshot()

})

})
