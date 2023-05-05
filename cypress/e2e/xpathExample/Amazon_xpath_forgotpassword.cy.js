/// <reference types ="Cypress"/>

describe('Webtable', function() {

    before(function (){
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

        it('verify forgotpassword', ()=> {

          cy.xpath('//input[@name="username"]')
            .type('admin')

          cy.xpath('//input[@name="password"]')
            .type('admin123')

          cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')
            .click()

          cy.title()
            .should('contain','HRM')
          cy.screenshot()
        
        })

    })
