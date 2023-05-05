/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Action Trigger Example', ()=> {


   it('verify serach item', ()=>{

       cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

       //cy.xpath("//*[@type='text']").type('iphone 14')






       //identification
       
       //right click button
       //span[text()='right click me']

       //span[contains(text(),'ht click')]
       

       //app1


       //contextmenu   ------ right click operation
       //cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu')

       

       //using xpath
       cy.get('button[contains(text)]')


       //app2
       //cy.get("span.context-menu-one.btn.btn-neutral").rightclick()



   })


it.skip('verify serach item', ()=>{

       cy.visit('https://www.amazon.in/')

       //identification
       cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')

       cy.xpath("//span[text()='Create a Wish List']").trigger('mouseover').click()



       cy.title().should('eq', 'Wish List')


   })


})