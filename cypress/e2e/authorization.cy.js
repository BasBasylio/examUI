import { faker } from '@faker-js/faker'; 
import user from '../fixtures/user.json';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1' });

describe('correct login', () => {
  it('passes', () => {
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
})

describe('login with wrong email', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    cy.get('#email').type(user.email + 'f');
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.')
  })
})

describe('login with wrong login', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    cy.get('#email').type(user.email);
    cy.get('#password').type('BasBasBas!1'+'f');
    cy.get('#loginButton').click();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.')
  })
})