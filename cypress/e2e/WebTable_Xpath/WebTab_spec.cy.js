/// <reference types="cypress"/>

describe('Amazon Shop now - scenario', function() {

it('perform action on shop now', ()=>{

    cy.visit('https://www.amazon.in')


    cy.xpath("//h2[contains(text(),'Bluetooth Calling Smartwatch starts at ₹1,999')]/parent::div/following-sibling::div/descendant::a[text()='Shop Now']")
      .click()

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