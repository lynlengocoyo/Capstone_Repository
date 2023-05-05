//const { wrap } = require("cypress/types/lodash")


describe('Create user', ()=>{


    it.only('create user', () => {
        cy.request({
                method: "POST", 
                url: "https://reqres.in/api/users",
                body: 	{
                    "name": "Nikki Tan",
                    "job": "Head Nurse"
                }
            }).as('details')
            
            
            cy.get('@details').its('status')
                     .should('eq', 201)
                       


            // cy.get('@details').then(   (resp) => {




            // } )
                        
        
        })
    
    
    })