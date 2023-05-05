

describe('IFRAME examaple', ()=> {

  it('iframe test', ()=> {

    cy.visit('https://the-internet.herokuapp.com/iframe')
    

   // cy.xpath('//body[@id="tinymce"]')
     // .clear()
     // .type('Hello')

     const my_iframe = customHandleIFrame('#mce_0_ifr')
       

      my_iframe.clear()
               .type('Hello world')
               .type('{ctrl}A')
    


    cy.get('Button[title="Bold"]')
      .click()

  })
})