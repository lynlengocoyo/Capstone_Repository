// const { describe } = require('mocha')
const data = require('../../fixtures/config.json')

describe('NOP Comm', ()=> {

      //hooks
      beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })

it('Date picker using Created from', ()=> {

  cy.login('admin@yourstore.com','admin')

  cy.title().should('eq', 'Dashboard / nopCommerce administration')

  cy.xpath("(//p[contains(text(),'Catalog')])[1]").click()

  cy.get('.menu-open > .nav > :nth-child(2) > .nav-link').click()

  cy.get('div.float-right > a.btn').click()
  
  cy.get('#Name').clear().type('Test')

  cy.CategoryHandleIframe('#Description_ifr').clear().type('Description')

  cy.get('#ParentCategoryId').select('Computers').should('have.value','1')

  cy.get('.qq-upload-button-selector > input').attachFile("sampleDemo.pdf")

})

})