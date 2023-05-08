
// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })


    it.skip('Add new item', ()=>{

      cy.login(data.email,data.pass)

      cy.title().should('eq', 'Dashboard / nopCommerce administration')
  
      cy.xpath("(//p[contains(text(),'Content management')])[1]").click()

      cy.get('.menu-open > .nav > :nth-child(3) > .nav-link').click()

      cy.get('.fas.fa-plus-square').click()

      cy.get('#Title').clear().type(data.NewData_TItle)
      cy.get('#Short').clear().type(data.Data_ShortDescription)
      cy.HandleIframe('#Full_ifr').clear().type(data.NewData_FullDescription)
      cy.get('#AllowComments').check().should('be.checked')
      cy.get('#StartDateUtc').clear().type(data.NewData_StartDate)
      cy.get('#EndDateUtc').clear().type(data.NewData_EndDate)
      cy.get('.k-multiselect-wrap').click()
      cy.xpath("//li[normalize-space()='Your store name']").click()
      cy.get('#Published').check().should('be.checked')
      cy.get('[name="save"]').click()

      cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      cy.screenshot

   })


})