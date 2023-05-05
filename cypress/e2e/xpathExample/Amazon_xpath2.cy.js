/// <reference types ="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Amazon See more - scenario', function() {

    it('type in search bar', ()=>{
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.xpath('//input[@id="twotabsearchtextbox"]')
         // .type('Samsung {enter}')

         cy.xpath('//input[@name="username"]')
           .type('admin')

         cy.xpath('//input[@name="password"]')
           .type('admin123')

         cy.xpath('//button[@type="submit"]')
           .click()

        cy.title()
          .should('eq','OrangeHRM')
          .should('contain','Orange')
          .should('not.eq','Apple')

        cy.url()
          .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
          .should('contain','dashboard')
          .should('not.eq','index')

        cy.xpath('//p[@class="oxd-userdropdown-name"]')
          .click()

        cy.xpath('//a[@href="/web/index.php/auth/logout"]')
          .click()

    })
})