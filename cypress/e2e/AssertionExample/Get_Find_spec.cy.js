/// <reference types="cypress"/>

describe('Assertion exmaple', function() {

it('perform action on see more', ()=>{

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F') 

    cy.get('#Email')
      .clear()
      .type('admin@yourstore.com')

    cy.get('#Password')
      .clear()
      .type('admin')

    cy.get('.button-1')
      .click()


    //get the text of specific element and value
    cy.get('div.content-header>h1')
      .then(function(ele){

        let actualText = ele.text()
        expect(actualText).to.contain('Dash')

      }) 

   // cy.get('.mt-2 > ul > li')
    //  .should('have.length.above', 8)

    //  cy.get('.mt-2 > ul > li')
     // .find('[href*="activity"]')
   //   .should('have.length', 2)

    //cy.get('input')
      //.contains('password')
      //.should('have.attr','value')

   // cy.get('input')
     // .find('.Password')
     // .should('have.attr','name')
   

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