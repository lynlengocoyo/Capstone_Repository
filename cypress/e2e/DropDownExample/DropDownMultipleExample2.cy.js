/// <reference types="cypress"/>

describe('dropdown example - select tag', function() {

it('verify dropdown', ()=>{

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')


    //select item from dropdown using value
    //validation correct value are selected or not
    
    //cy.get('tr > :nth-child(1) > select')
      //.select(['India', 'Italy'])


   // cy.get('tr > :nth-child(1) > select')
    //  .select([0, 'Italy'], {force: true})
      
     // cy.get('.globalcountrycode')
     // .select('Brazil')
     //.should('have.value', 'Brazil')
     //.should('contain', 'Brazil')

     cy.get('#select2-billing_country-container')
       .click()
       
       let countrySearch = 'italy';

     //perform enter keyboard operation  
    // cy.get('.select2-search__field')
      // .type('Japan') //or .type('Japan , {enter}')
       //.type('{enter}')
      
      cy.get('.select2-search__field')
       .type(countrySearch +'{Enter}') 


    
})

})