

class Customersview {





    //Identification

    csdropDown = '.icon-collapse'
    customerEmail = '#SearchEmail'
    searchButton = '#search-customers'

    //Methods


    entercustomerEmail(customerEmailID){

        cy.get(this.customerEmail)
        .clear()
        .type(customerEmailID)
    }

    clicksearchButton() {
        cy.get(this.searchButton)
          .click()

    }
    clickCSdropDown() {

        cy.get(this.csdropDown)
          .click()
    }

}


export default Customersview;