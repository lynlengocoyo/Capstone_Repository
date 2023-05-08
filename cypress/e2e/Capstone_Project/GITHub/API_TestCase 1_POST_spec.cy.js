

describe('GITHUB Repo', ()=> {

      
      var ValidToken = "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"
      var FetchRepoName = ""
      var NewRepository = "Capstone_Repository2"


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
               "Authorization" : "Bearer" + ValidToken,
               "Content-Type" : "application/json" 

            }

     })
     
     .then( (APIresult)=> {

        expect(APIresult).to.eq(200)
       // expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capston_Repository')
      // FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      })

