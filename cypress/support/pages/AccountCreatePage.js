class AccountCreatePage{
    registerVisit() {
        cy.visit('/#/register')
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    registerGetEmailField() {
        return cy.get('#emailControl');
    }

    registerGetPasswordField() {
        return cy.get('#passwordControl');
    }

    registerGetPasswordConfirmField() {
        return cy.get('#repeatPasswordControl');
    }

    registerGetQuestion() {
        cy.get('#mat-select-value-1').click();
        cy.get('#mat-option-4').click()
        cy.get('#securityAnswerControl').type('bas');
    }

    registerGetSubmitRegistrationFormButton() {
        cy.get('#registerButton').click();
    }

    registerGetRegisterUserWithValidCredentials(user) {
        this.registerVisit()
  
        this.registerGetEmailField().type(user.email)
        this.registerGetPasswordField().type(user.password)
        this.registerGetPasswordConfirmField().type(user.password)
        
        this.registerGetQuestion();
        this.registerGetSubmitRegistrationFormButton();
    }


}
export default new AccountCreatePage();