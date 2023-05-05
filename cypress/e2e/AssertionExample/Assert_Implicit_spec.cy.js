/// <reference types="cypress"/>

describe('Assertion exmaple', function() {

it('perform action on see more', ()=>{

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    cy.url().should('include','nopcommerce')
    cy.url().should('eq','https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    cy.url().should('contain','nop')
    cy.url().should('not.contain','google')

    cy.url().should('include','nopcommerce')
            .and('eq','https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
            .and('contain','nop')
            .and('not.contain','google') 

    cy.get('#Email')
      .should('be.visible')
      .and('exist')

    cy.get('#RememberMe')
      .should('have.attr','type')
      //.and('have.text','Remember me?')

    cy.get('input')
      .should('have.length.above', 2)

    //cy.get('input')
      //.contains('password')
      //.should('have.attr','value')

    cy.get('input')
      .find('.Password')
      .should('have.attr','name')
   

    //cy.get('#\34 zI74vNaPXoTJxazfjo_nA > .a-cardui-footer > .a-link-normal')
      //.click()


    //let searchItem = 'Delhi'

    //cy.get('input#searchInput')
      //.clear()
      //.type(searchItem)


     // cy.get('h3.suggestion-title')
      //  .should('have.length', 6)

     // cy.get('h3.suggestion-title')
       // .should('have.length.above', 5)

      //cy.get('h3.suggestion-title')
      //  .contains('Delhi University').click();

     // cy.title()
       // .should('eq','Delhi University - Wikipedia')
      //  .should('contain','Delhi')
     //   .should('not.eq','Italy')

      //cy.url()
      //  .should('eq','https://en.wikipedia.org/wiki/Delhi_University')
      //  .should('contain','Delhi')
       // .should('not.eq','Italy')

    })

})