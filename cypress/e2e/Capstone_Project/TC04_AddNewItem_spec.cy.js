
// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
  //    beforeEach(()=>{

 //       cy.log(`Executing the Before each`)


  //  })


    it('Add new item', ()=>{

      //Launch NopCommerce app
      cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
      cy.viewport(1200, 1200)

      //Login by Custom command
      cy.login(data.email,data.pass)

      //Page title validation
      cy.title().should('eq', 'Dashboard / nopCommerce administration')
  
      //Dashboard navigation - Content Management
      cy.xpath("(//p[contains(text(),'Content management')])[1]").click()

      //Navigation to News items menu item
      cy.get('.menu-open > .nav > :nth-child(3) > .nav-link').click()

      //Click add new button
      cy.get('.fas.fa-plus-square').click()

      //Input title
      cy.get('#Title').clear().type(data.NewData_TItle)

      //Input short description
      cy.get('#Short').clear().type(data.NewData_ShortDescription)

      //Input full description
      cy.HandleIframe('#Full_ifr').clear().type(data.NewData_FullDescription)

      //Check allow comments checkbox
      cy.get('#AllowComments').check().should('be.checked')

      //Input start date
      cy.get('#StartDateUtc').clear().type(data.NewData_StartDate)

      //Input end date
      cy.get('#EndDateUtc').clear().type(data.NewData_EndDate)

       //Perform click in dropdownlist
      cy.get('.k-multiselect-wrap').click()
      cy.xpath("//li[normalize-space()='Your store name']").click()

      //Check Published checkbox
      cy.get('#Published').check().should('be.checked')

      //Perform to click save button
      cy.get('[name="save"]').click()

      //cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      //Perform screenshot
      cy.screenshot()

   })


})