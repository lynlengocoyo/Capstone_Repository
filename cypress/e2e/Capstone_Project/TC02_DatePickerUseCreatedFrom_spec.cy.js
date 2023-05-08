
// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })

    it.skip('Date picker', ()=> {

      cy.login(data.email,data.pass)
    
      cy.title().should('eq', 'Dashboard / nopCommerce administration')
    
      cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
    
      cy.get('.menu-open > .nav > :nth-child(5) > .nav-link').click()
    
     
      cy.get('#CreatedOnFrom').clear().type(data.start)
      cy.get('#CreatedOnTo').clear().type(data.end)
    
      cy.get('#search-log').click()
    
      cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      cy.screenshot

})

})
