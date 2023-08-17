class RegisterPage{
    registerVisit() {
        cy.visit('/#/register');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }
}
export default new RegisterPage();  

