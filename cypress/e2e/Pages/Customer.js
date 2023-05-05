

class Customer {





    //Identification

    dropDowmn = "(//p[contains(text(),'Customers')])[1]"
    radioButton = '.menu-open > .nav > :nth-child(1) > .nav-link'
    

    //Methods
    customerDropDown(){

        cy.xpath(this.dropDowmn)
        .click()
    }

    customerButton(){

        cy.get(this.radioButton)
        .click()
    }

}


export default Customer;