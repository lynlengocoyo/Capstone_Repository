/// <reference types="cypress"/>

describe('Assertion exmaple', ()=> {

it('Explicit Example --- expect/assert', ()=>{

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

   
   cy.title().then ( (title) => {

   cy.log('Application Title: ${title}')

    expect(title).to.equal('Your store. Login')
    expect(title).to.not.equal('Dashboard')


    assert.equal(title, 'Your store. Login')


   })

})

})