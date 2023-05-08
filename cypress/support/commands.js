// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')


require('cypress-iframe');

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import 'cypress-file-upload'


Cypress.Commands.add("login", (username, password) => {

   //Launch application
   //cy.viewport(1200, 1200)

   //Verify page title
   //cy.title().should('eq', 'Your store. Login')

   //Input email
   cy.get('input#Email').clear().type(username)

   //input password
   cy.get('.password').clear().type(password)

   //Check Remember me Checkbox
   cy.get('#RememberMe').check().should('be.checked')

   //click button
   cy.get('.button-1').click()


})

//Cypress.Commands.add('ClickLinkText', (eleText)=>{


   // cy.get('a').contains(eleText).click()

	//})


   Cypress.Commands.add('customHandleIFrame', function(locatorFrame) {
        
        
        return cy.get(locatorFrame)
               .its('0.contentDocument.body')
              .should('be.visible')
               .then(cy.wrap)

  })

  //IFrame for Add new item
   Cypress.Commands.add('HandleIframe', (iframe) => {
      
         return cy.get(iframe)
                  .its('0.contentDocument.body')
                  .should('be.visible')
                  .then(cy.wrap)

   } )
  //IFrame for File upload
   Cypress.Commands.add('CategoryHandleIframe', (iframe2) => {
      
    return cy.get(iframe2)
             .its('0.contentDocument.body')
             .should('be.visible')
             .then(cy.wrap)

} )

    Cypress.Commands.add('verifyElementText', (selector, expectedText)=>{
    


        cy.get(selector).then((ele) => {

           expect(ele.text()).to.equal(expectedText)



        } )

})


//const data = require('../../fixtures/data.json')

Cypress.Commands.add("login", (username, password) => {

      //Launch application
      cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
      //cy.viewport(1200, 1200)

      //Verify page title
      //cy.title().should('eq', 'Your store. Login')

      //Input email
      cy.get('input#Email').clear().type(username)

    //input password
      cy.get('.password').clear().type(password)


    //click button
      cy.get('.button-1').click()

})

