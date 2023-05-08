// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
    //  beforeEach(()=>{

       // cy.log(`Executing the Before each`)


   // })

    it('File/Image upload', ()=> {

      //Launch NopCommerce app
      cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
      cy.viewport(1200, 1200)

      //Login by Custom command
      cy.login(data.email,data.pass)

      //Page title validation
      cy.title().should('eq', 'Dashboard / nopCommerce administration')

      //Dashboard navigation - Catalog
      cy.xpath("(//p[contains(text(),'Catalog')])[1]").click()

      //Navigation to Categories menu item
      cy.get('.menu-open > .nav > :nth-child(2) > .nav-link').click()

      //Perform click to Add new button
      cy.get('div.float-right > a.btn').click()

      //Input Name
      cy.get('#Name').clear().type(data.Name_FileUpload)
      
      //Input Description
      cy.CategoryHandleIframe('#Description_ifr').clear().type(data.Description_FileUpload)

      //Perform click in dropdownlist
      cy.get('#ParentCategoryId').select('Computers').should('have.value','1')

      //Click button to attach image file
      cy.get('.qq-upload-button-selector > input').attachFile("Computer.jpg")

      //Perform to click save button
      cy.get('[name="save"]').click()

      //cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      //Perform screenshot
      cy.screenshot()

})

})