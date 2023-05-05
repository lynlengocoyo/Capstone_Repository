
import Login from '../Pages/LoginPage'
import Customer from '../Pages/Customer'
import Customersview from '../Pages/Customersview'

describe('Verify NOP Comm Login', ()=>{



    //hooks
    beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.viewport(1200, 1200)

    })

    it.skip('verifyLogin and Logout with valid user credenatils', ()=>{

        cy.get('input#Email')
          .clear()
          .type('admin@yourstore.com')

        cy.get('#Password')
          .clear()
          .type('admin')

        cy.get('#RememberMe')
          .check()
          .should('be.checked')

        cy.verifyElementText('button[type="submit"]', 'Log in')
        cy.get('button')
          .contains('Log in')
          .click()


        //validation
        cy.title()
          .should('eq', 'Dashboard / nopCommerce administration')

    })



    it('verify Login and Logout with valid user credenatils - Page Object Model', ()=>{

        
        const lp = new Login();
              lp.enterEmail('admin@yourstore.com')
              lp.enterPassword('admin')
              lp.clickCheckBox()
              lp.clickButton()

        //validation
       // cy.title().should('contain', '')


        // //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })

    it('verify dashboard', ()=> {

        const cs = new Customer();

        cy.get('input#Email')
          .clear()
          .type('admin@yourstore.com')

        cy.get('#Password')
          .clear()
          .type('admin')

        cy.get('#RememberMe')
          .check()
          .should('be.checked')

        cy.get('button')
          .contains('Log in')
          .click()

        cs.customerDropDown()
        cs.customerButton()
        

        const cv = new Customersview();
              cv.clickCSdropDown()
              cv.entercustomerEmail('victoria_victoria@nopCommerce.com')
              cv.clicksearchButton()

    })

    it.skip('verify customers input', ()=> {

        const cv = new Customersview();
              cv.entercustomerEmail('victoria_victoria@nopCommerce.com')
              cv.clicksearchButton()




       })

    })
