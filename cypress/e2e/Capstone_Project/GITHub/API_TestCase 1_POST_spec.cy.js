

describe('GITHUB Repo', ()=> {

      
      var AuthToken = "ghp_aIoMx29QluNz4gQBej"
      var key = "QZfyZQgq6DTR0qLc4C"
      var FetchRepoName = ""
      var NewRepository = "Capstone_Repository7"


  it('List repositories for the authenticated user', ()=> {


     cy.request({

        method: "POST",
        url: "https://api.github.com/user/repos",

      body:  {

              "name" : NewRepository
               
            },

         headers:
            {
               
               "Authorization" : "Bearer " + AuthToken + key,
               "Content-Type": "application/json"

            }

     })
     
     .then( (APIresult)=> {

        expect(APIresult.status).to.eql(201)
       // expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capston_Repository')
      // FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      })

