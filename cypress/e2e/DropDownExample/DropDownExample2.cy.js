/// <reference types="cypress"/>

describe('dropdown example - select tag', function() {

it('verify dropdown', ()=>{

    cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')


    //select item from dropdown using value
    //validation correct value are selected or not
    
      cy.get('[dir="ltr"] > :nth-child(5)')
        .select('USA')
        .should('have.value', 'Opel')
        .should('contain', 'UK')

      
     // cy.get('.globalcountrycode')
     // .select('Brazil')
     //.should('have.value', 'Brazil')
     //.should('contain', 'Brazil')
})

})