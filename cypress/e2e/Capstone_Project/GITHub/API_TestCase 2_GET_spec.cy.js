

describe('GITHUB Repo', ()=> {

      
      //var ValidToken = "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"

      var AuthToken = "ghp_GiMGWwcMghqh4z0usN"
      var key = "3tVJg8AM1dZi4TefOE"
      var FetchRepoName = ""


  it('Test case 2', ()=> {


     cy.request({

        method: "GET",
        url: "https://api.github.com/user/repos",

      headers:  {

              
              "Authorization" : "Bearer " + AuthToken + key,
               accept: 'application/json',
               
            }

     })
     
     .then( (APIresult)=> {

        expect(APIresult.status).to.eql(200)
        expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capstone_Repository')
        FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      it('fetch repo name', ()=> {

         cy.log('RepositoryName:' + FetchRepoName)


      })



  })
