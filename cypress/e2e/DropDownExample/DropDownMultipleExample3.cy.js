/// <reference types="cypress"/>

describe('dropdown example - select tag', function() {

it('verify dropdown', ()=>{

    cy.visit('https://www.wikipedia.org/')

    let searchItem = 'Delhi'

    cy.get('input#searchInput')
      .clear()
      .type(searchItem)


      cy.get('h3.suggestion-title')
        .should('have.length', 6)

      cy.get('h3.suggestion-title')
        .should('have.length.above', 5)

      cy.get('h3.suggestion-title')
        .contains('Delhi University').click();

      cy.title()
        .should('eq','Delhi University - Wikipedia')
        .should('contain','Delhi')
        .should('not.eq','Italy')

      cy.url()
        .should('eq','https://en.wikipedia.org/wiki/Delhi_University')
        .should('contain','Delhi')
        .should('not.eq','Italy')

    })

})