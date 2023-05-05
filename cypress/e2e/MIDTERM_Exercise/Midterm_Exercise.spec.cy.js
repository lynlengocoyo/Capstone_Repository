/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe('Midterm exercise', function() {

it('perform more actions', ()=>{

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    cy.viewport(1200, 1200)

    //input username
        cy.get('#Email')
          .clear()
          .type('admin@yourstore.com')
        

    //input password
        cy.get('#Password')
          .clear()
          .type('admin')

    //click checkbox
        cy.xpath('//input[@type="checkbox"]')
          .should('not.be.checked')
          .check().and('be.checked')

    //Click login button
        cy.xpath('//button[@class="button-1 login-button"]')
        .click()

    //validation
        cy.title()
          .should('eq', 'Dashboard / nopCommerce administration')
          .should('contain','Dashboard')
          .should('not.eq', 'Login')

    //Customers dropdown
        cy.xpath("(//p[contains(text(),'Customers')])[1]")
          .click()

        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link')
          .click()

        cy.get('#SearchEmail')
          .clear()
          .type('admin@yourstore.com')

        cy.get('#search-customers')
          .click()

            
          cy.screenshot()



    })

})