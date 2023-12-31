///<reference types="cypress"/>
class AccountLoginPage  {
    loginVisit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    loginEmail() {
        return cy.get('#email');
    }

    loginPass() {
        return cy.get('#password');
    }

    loginButton() {
        return  cy.get('#loginButton').click();
    
    }

    loginAccount(user){
        this.loginEmail().type(user.email);
        this.loginPass().type(user.password);
        this.loginButton();
    }
}
export default new AccountLoginPage();