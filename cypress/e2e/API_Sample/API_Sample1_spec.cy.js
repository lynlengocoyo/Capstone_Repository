

describe('API testing', ()=> {


    it.skip('verify test API', ()=> {

        //API testing
        cy.request('GET', 'http://universities.hipolabs.com/search?country=Philippines')
          .its('status')
          .should('eq', 200)
          //.should('contains', )


    })

    it('verify test API', ()=> {

        //API testing
        cy.request('GET', 'http://universities.hipolabs.com/search?country=Philippines')
          .then((response) => {

            expect(response.status).to.eq(200)
            //Verify State-province on array (1) should be Davao Del Sur
            expect(response.body[1]["state-province"]).to.eq('Davao del Sur')

            //Verify Country on array(6) should be Philippines
            expect(response.body[6].country).to.eq('Philippines')

            //Verify Alpha two code on array(22) should be PH
            expect(response.body[22].alpha_two_code).to.eq('PH')

            //expect(response.body[0].name).to.eq('Adamson University')

          } )
        
        })

    })
