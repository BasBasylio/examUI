import { faker } from '@faker-js/faker';                              
import user from '../fixtures/user.json';  
import accountCreatePage from '../support/pages/AccountCreatePage';
import accountLoginPage from '../support/pages/AccountLoginPage';
                   
user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1' });

describe('register user', () => {
  it('ok', () => {
    
    accountCreatePage.registerUserWithValidCredentials(user);
  
    accountLoginPage.loginAccount(user);

    cy.get('.ng-star-inserted').should('contain', 'All Products');

  })
})

describe('register user with bad email', () => {
  it('bad email', () => {
    accountCreatePage.registerVisit();
    accountCreatePage.registerGetEmailField().type(user.email[1]);
    accountCreatePage.registerGetPasswordField().type(user.password);
    accountCreatePage.registerGetPasswordConfirmField().type(user.password);

    cy.get('.mat-error.ng-tns-c119-7.ng-star-inserted').should('contain', 'Email address is not valid.');

  })
})

describe('register user with bad pass', () => { 
  it('bad pass conf', () => {
    accountCreatePage.registerVisit();
    accountCreatePage.registerGetEmailField().type(user.email);
    accountCreatePage.registerGetPasswordField().type(user.password[1]);
    accountCreatePage.registerGetPasswordConfirmField().type(user.password);

    cy.get('.mat-error.ng-tns-c119-8.ng-star-inserted').should('contain', 'Password must be 5-40 characters long. ');

  })
})
