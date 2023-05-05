

describe('Multiple file upload example', ()=> {

it('File upload test 1', ()=> {

cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')


  cy.get('.smart-browse-input', {includeShadowDom: true})
    .attachFile('sample.txt')


  //validation step

  cy.get('.smart-item-name', {includeShadowDom: true})
    .contains('sample.txt')

  cy.get('.smart-item-name', {includeShadowDom: true})
    .should('have.txt','sample.txt')

    //cy.wait(3000)

   // cy.get('h3').should('have.text', 'File Uploaded!')
  
  //  cy.get('#uploaded-files').then ( (ele) => {
  
         // let actualText = ele.text()
         // cy.log('File uploaded name: ${actualText}')
         // expect(actualText).to.contain('sample')


})

})
