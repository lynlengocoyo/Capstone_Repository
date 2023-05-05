/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import Login from '../Pages/LoginPage'

// const { describe } = require('mocha')
const x = require('../../config/data.json')

describe('Midterm exercise', function() {

it('perform more actions', ()=>{

    cy.visit(x.appURL) // ('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    cy.viewport(1200, 1200)

    //input username
      //  cy.get('input#Email')
      //    .clear()
       //   .type(email)  
        

    //input password
      //  cy.get('#Password')
      //    .clear()
     //     .type('admin')

    //click checkbox
      //  cy.xpath('//input[@type="checkbox"]')
      //    .should('not.be.checked')
       //   .check().and('be.checked')

    //Click login button
      //  cy.xpath('//button[@class="button-1 login-button"]')
     //   .click()

    //validation
      //  cy.title()
       //   .should('eq', 'Dashboard / nopCommerce administration')
      //    .should('contain','Dashboard')
       //   .should('not.eq', 'Login')

    //Customers dropdown
   //     cy.xpath("(//p[contains(text(),'Customers')])[1]")
      //    .click()

      //  cy.get('.menu-open > .nav > :nth-child(1) > .nav-link')
       //   .click()

     //   cy.get('#SearchEmail')
      //    .clear()
      //    .type('admin@yourstore.com')

    //   cy.get('#search-customers')
      //    .click()

            
      //    cy.screenshot()



    })

    it('verifyLogin and Logout with valid user credenatils - Page Object Model', ()=>{

        
      const lp = new Login();

      lp.enterEmail('adminPageObjectModel@yourstore.com')

     const ps = new Login();

   //   ps.enterPassword('admin')




      //validation
     // cy.title().should('contain', 'Login')


      // //validation
      // cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })

})