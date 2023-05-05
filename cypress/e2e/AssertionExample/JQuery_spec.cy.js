/// <reference types="cypress"/>

describe('JQuery exmaple', ()=> {

  beforeEach(()=> {

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')


  })
})

it('JQuery Example', ()=>{

    let textEmail =  Cypress.$('#Email')

    if(textEmail.length) {

      cy.log(textEmail.attr('name'))

    }

})
   


//it('Without JQuery example', ()=> {

   // cy.get('#Email').then( (ele)=> {

   //   cy.log('Without JQuery: ${ele.attr('name')}')
   // })
//})
