

describe('GITHUB Repo', ()=> {

      
      var ValidToken = "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"
      var FetchRepoName = ""
      var NewRepository = "Capstone_Repository5"


  it('Test case 1', ()=> {


     cy.request({

        method: "POST",
        url: "https://api.github.com/user/repos",

        body:
            {

              "name" : NewRepository
               
            },

         headers:
            {
               "Authorization" : "Bearer " + ValidToken,
               "Content-Type" : "application/json" 

            }

     })
     
     .then( (APIresult)=> {

        expect(APIresult.status).to.eql(201)
       // expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capston_Repository')
      // FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      })

