

describe('IFRAME examaple', ()=> {

  it('iframe test', ()=> {

    cy.visit('https://the-internet.herokuapp.com/iframe')
    

    cy.frameLoaded('#mce_0_ifr')

    cy.iframe('#mce_0_ifr')
      .clear()
      //.type("")
      .type('Test Test Test')
      .type('{ctrl}A')

    

   // cy.xpath('//body[@id="tinymce"]')
     // .clear()
     // .type('Hello')

     //const my_iframe = cy.customHandleIFrame('#mce_0_ifr')
        

    //  my_iframe.clear()
             //  .type('Hello world')
             //  .type('{ctrl}A')
    
    cy.get('Button[title="Bold"]')
      .click()

    cy.get('Button[aria-label="Italic"]')
      .click()

    cy.get('Button[aria-label="Align center"]')
      .click()


  })
})