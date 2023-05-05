

class Login {





    //Identification

    txtEmail = 'input#Email'
    txtPassword = '#Password'
    CheckBox = '#RememberMe'
    Button = 'button'

    //Methods

    enterEmail(emailID){

        cy.get(this.txtEmail)
        .clear()
        .type(emailID)
    }

    enterPassword(passwordID){

        cy.get(this.txtPassword)
        .clear()
        .type(passwordID)
    }

    clickCheckBox() {

        cy.get(this.CheckBox)
          .check()
          .should('be.checked')
    }

    clickButton() {
        cy.get(this.Button)
          .contains('Log in')
          .click()

    }

}


export default Login;