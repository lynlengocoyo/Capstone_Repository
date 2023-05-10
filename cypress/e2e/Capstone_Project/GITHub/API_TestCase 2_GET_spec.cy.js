

describe('GITHUB Repo', ()=> {

      
      //var ValidToken = "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"

      var AuthToken = "ghp_aIoMx29QluNz4gQBej"
      var key = "QZfyZQgq6DTR0qLc4C"
      var FetchRepoName = ""


  it('List repositories for the authenticated user', ()=> {


     cy.request({

        method: "GET",
        url: "https://api.github.com/user/repos",

      headers:  {

              
              "Authorization" : "Bearer " + AuthToken + key,
               accept: 'application/json'
               
            }

     })
     
     .then( (APIresult) => {

        expect(APIresult.status).to.eql(200)
        expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capstone_Repository')
        FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      it('fetch repo name', ()=> {

         cy.log('RepositoryName:' + FetchRepoName)


      })



  })
