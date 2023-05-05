/// <reference types="cypress"/>

describe('dropdown example - select tag', function() {

it('verify dropdown', ()=>{

    cy.visit('https://www.zoho.com/commerce/free-demo.html')


    //select item from dropdown using value
    //validation correct value are selected or not
    cy.get('.globalcountrycode')
      .select(5)
      .should('have.value', 'Andorra')
      .should('contain', 'Andorra')

      
     // cy.get('.globalcountrycode')
     // .select('Brazil')
     //.should('have.value', 'Brazil')
     //.should('contain', 'Brazil')
})

})