

describe('Create user', ()=> {


    it('Create user API test', ()=> {

     // let emp_name = "Lynlen"
    //  let role = "Automation tester"

       cy.request({

          method: "POST",
          url: "https://reqres.in/api/user",
          body:
                  {
                      tourist_name: "Lynlen",
                      tourist_email: "touristlen@dot.com",
                      tourist_location: "Southern Leyte"

                  }

       }).then( (resp)=> {

          expect(resp.status).to.eq(201)
          expect(resp.body.tourist_name).to.eq('Lynlen')
          expect(resp.body.tourist_email).to.eq('touristlen@dot.com')
          expect(resp.body.tourist_location).to.eq('Southern Leyte')
       })

    .its('status')
    .should('eq', 201)

    })

    })
