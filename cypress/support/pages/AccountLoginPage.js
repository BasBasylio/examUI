class AccountLoginPage {
    loginVisit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    loginEmail() {
        cy.get('#email').type(user.email);
    }

    loginPass() {
        cy.get('#password').type('BasBasBas!1');
    }

    loginButton() {
        cy.get('#loginButton').click();
    
    }
}
export default new AccountLoginPage();