class LoginPage{
    visit() {
        cy.visit('/#/login');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }
}
export default new LoginPage();  
