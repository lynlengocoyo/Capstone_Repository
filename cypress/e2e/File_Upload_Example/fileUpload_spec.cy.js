

describe('File upload example', ()=> {

it.skip('File upload test 1', ()=> {

cy.visit('https://the-internet.herokuapp.com/upload')

//perform action on element

    cy.get('#file-upload')
      .attachFile('sample.txt')

//perform action button
    cy.get('#file-submit')
      .click()

//verify

    cy.wait(3000)

    cy.get('h3').should('have.text', 'File Uploaded!')

    cy.get('#uploaded-files').then ( (ele) => {

        let actualText = ele.text()
        cy.log('File uploaded name: ${actualText}')
        expect(actualText).to.contain('sample')

    })

})

it.only('PDF file upload', ()=> {

    cy.visit('https://the-internet.herokuapp.com/upload')

    //perform action on elemenet
        //window ---- \\   or /
        //non-window ----- /

    cy.get('#file-upload').attachFile("SampleDemo.pdf")

    cy.get('#file-submit')
      .click()


    cy.wait(3000)

    cy.get('h3').should('have.text', 'File Uploaded!')
  
    cy.get('#uploaded-files').then ( (ele) => {
  
          let actualText = ele.text()
          cy.log('File uploaded name: ${actualText}')
          expect(actualText).to.contain('sample')


        })

})

it.skip('drag and drop file', ()=> {

    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('div#drag-drop-upload')
      .attachFile('sample.txt', {subjectType: 'drag-n-drop'})


    cy.wait(3000)

})

})