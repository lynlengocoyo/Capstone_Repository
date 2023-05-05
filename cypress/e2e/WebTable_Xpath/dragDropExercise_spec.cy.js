
//require('@4tw/cypress-drag-drop')


describe('Drag drop', () => {


  it('drag drop', ()=> {

     cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')


    // cy.xpath('//div[@id="box6"]').should('be visible')
    // cy.get('#box106').should('be visible')

     cy.get('//div[@id="box6"]')
       .drag('#box106', {force: true})
  })

})