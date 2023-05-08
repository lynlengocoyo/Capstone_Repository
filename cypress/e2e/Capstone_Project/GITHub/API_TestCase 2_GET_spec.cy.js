

describe('GITHUB Repo', ()=> {

      
      var ValidToken = "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"
      var FetchRepoName = ""


  it('Test case 2', ()=> {


     cy.request({

        method: "GET",
        url: "https://api.github.com/user/repos",

      header:  {

              "Authorization" : "Bearer" + ValidToken
               
            }

     })
     
     .then( (APIresult)=> {

        expect(APIresult).to.eq(200)
        expect(APIresult.body[0].full_name).to.contain('lynlengocoyo/Capstone_Repository')
        FetchRepoName = APIresult.body[0].full_name

    
      })

  })

      it('fetch repo name', ()=> {

         cy.log('RepositoryName:' + FetchRepoName)


      })



  })
