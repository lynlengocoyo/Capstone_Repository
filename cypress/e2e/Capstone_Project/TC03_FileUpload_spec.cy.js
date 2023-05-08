// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })

    it('File/Image upload', ()=> {

      cy.login(data.email,data.pass)

      cy.title().should('eq', 'Dashboard / nopCommerce administration')

      cy.xpath("(//p[contains(text(),'Catalog')])[1]").click()

      cy.get('.menu-open > .nav > :nth-child(2) > .nav-link').click()

      cy.get('div.float-right > a.btn').click()
  
      cy.get('#Name').clear().type(data.Name_FileUpload)

      cy.CategoryHandleIframe('#Description_ifr').clear().type(data.Description_FileUpload)

      cy.get('#ParentCategoryId').select('Computers').should('have.value','1')

      cy.get('.qq-upload-button-selector > input').attachFile("Computer.jpg")

      cy.get('[name="save"]').click()

      cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    
      cy.screenshot

})

})