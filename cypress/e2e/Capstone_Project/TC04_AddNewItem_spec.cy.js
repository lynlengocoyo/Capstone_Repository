
// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })


    it('Execute Vendors and perform search using vendor name.', ()=>{

      cy.login(data.email,data.pass)

      cy.title().should('eq', 'Dashboard / nopCommerce administration')
      
      cy.xpath("(//p[contains(text(),'Content management')])[1]").click()

      cy.get('.menu-open > .nav > :nth-child(3) > .nav-link').click()

      cy.get('.fas.fa-plus-square').click()

      cy.get('#Title').clear().type('Test2')
      cy.get('#Short').clear().type('Test2 short')
      cy.HandleIframe('#Full_ifr').clear().type('Test full')
      cy.get('#AllowComments').check().should('be.checked')
      cy.get('#StartDateUtc').clear().type('05/04/2023')
      cy.get('#EndDateUtc').clear().type('05/05/2023')
      cy.get('.k-multiselect-wrap').click()
      cy.xpath("//li[normalize-space()='Your store name']").click()
      cy.get('#Published').check().should('be.checked')
      cy.get('[name="save"]').click()

    })


})