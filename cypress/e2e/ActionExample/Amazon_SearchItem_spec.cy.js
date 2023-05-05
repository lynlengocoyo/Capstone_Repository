/// <reference types ="Cypress"/>
//// <reference types="cypress-xpath" />

describe('Action trigger', function() {

    it('verify action trigger', ()=>{
    
        cy.visit('https://www.amazon.in/')

        //identification
        cy.get('#nav-link-accountList-nav-line-1')
          .trigger('mouseover')

        cy.get('').trigger('contextmenu')

       // cy.xpath("[//*[@type='text']")
          //.type('iphone 14')//
        
        //cy.xpath('//input[@id="nav-search-submit-button"]')
          //.click()
        
       // cy.title().should('contains','iphone 14')

       // cy.url('https://www.amazon.in/__/#/specs/runner?file=cypress/e2e/xpathExample/Amazon_xpath_Screenshot.cy.js')
          // .should('contain', 'iphone 14')

       // cy.screenshot()


    })
})