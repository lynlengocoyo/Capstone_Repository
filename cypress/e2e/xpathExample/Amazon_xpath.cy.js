/// <reference types ="Cypress"/>
/// <reference types="cypress-xpath" />

describe('Amazon See more - scenario', function() {

    it('type in search bar', ()=>{
    
        cy.visit('https://www.amazon.in/')

        cy.xpath('//input[@id="twotabsearchtextbox"]')
          .type('Samsung {enter}')

    })
})