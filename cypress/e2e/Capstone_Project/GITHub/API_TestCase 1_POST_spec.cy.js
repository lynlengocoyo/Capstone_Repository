

describe('GITHUB Repo', ()=> {

      
      var AuthToken = "ghp_GiMGWwcMghqh4z0usN"
      var key = "3tVJg8AM1dZi4TefOE"
      var FetchRepoName = ""
      var NewRepository = "Capstone_Repository7"


  it('Test case 1', ()=> {


     cy.request({

        method: "POST",
        url: "https://api.github.com/user/repos",

      headers:  {

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

