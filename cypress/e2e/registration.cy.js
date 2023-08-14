import { faker } from '@faker-js/faker';                              
import user from '../fixtures/user.json';  
import accountCreatePage from '../support/pages/AccountCreatePage';
                   
user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1' });

describe('login with user', () => {
  it('ok', () => {
    
    accountCreatePage.registerVisit()
  
    accountCreatePage.registerGetEmailField().type(user.email)
    accountCreatePage.registerGetPasswordField().type(user.password)
    accountCreatePage.registerGetPasswordConfirmField().type(user.password)
    
    accountCreatePage.registerGetQuestion();
    accountCreatePage.registerGetSubmitRegistrationFormButton();
 
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('#loginButton').click();
      cy.get('.ng-star-inserted').should('contain', 'All Products')

  })

  it('bad pass', () => {
    accountCreatePage.registerVisit()

    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(1);
    cy.get('#repeatPasswordControl').type(1);

    accountCreatePage.registerGetQuestion();
     
    cy.get('#registerButton').should('have.disabled', 'true')

  })

  it('bad email', () => {
    accountCreatePage.registerVisit()

    cy.get('#emailControl').type(1);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);

    accountCreatePage.registerGetQuestion();
     
    cy.get('#registerButton').should('have.disabled', 'true')

  })

})
