

describe('GITHUB Repo', ()=> {

      
      var ValidToken = "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"
      var FetchRepoName = ""


  it('Test case 2', ()=> {


     cy.request({

        method: "GET",
        url: "https://api.github.com/user/repos",

      headers:  {

              "Authorization" : "Bearer " + ValidToken,
              accept: 'application/json'
               
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
