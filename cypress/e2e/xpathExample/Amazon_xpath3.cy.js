/// <reference types ="Cypress"/>

describe('Webtable', function() {

    before(function (){
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

        it('WebTableTest1', ()=> {

          cy.get('table#tbale1').find('tbody').find('tr')
            .should('have.length', 4)

          cy.get('table#tbale1 > tbdoy > tr').first().find('a').first().click()

          cy.get('table#tbale1 > tbdoy > tr').last().find('a').first().click()

        })

    })
