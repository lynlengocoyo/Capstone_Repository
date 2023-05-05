/// <reference types ="Cypress"/>
/// <reference types="cypress-xpath" />

describe('Amazon screenshot', function() {

    it('verify search item', ()=>{
    
        cy.visit('https://www.amazon.in/')

        cy.xpath('//input[@id="twotabsearchtextbox"]')
          .type('iphone 14')
        
        cy.xpath('//input[@id="nav-search-submit-button"]')
          .click()
        
        cy.title().should('contains','iphone 14')

       // cy.url('https://www.amazon.in/__/#/specs/runner?file=cypress/e2e/xpathExample/Amazon_xpath_Screenshot.cy.js')
          // .should('contain', 'iphone 14')

        cy.screenshot()


    })
})