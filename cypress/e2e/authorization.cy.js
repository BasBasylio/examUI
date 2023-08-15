import { faker } from '@faker-js/faker'; 
import user from '../fixtures/user.json';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1'});

describe('correct login', () => {
  it('passes', () => {  

    accountCreatePage.registerUserWithValidCredentials(user);

    accountLoginPage.loginAccount(user);
 
  })
})

describe('login with wrong email', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    accountLoginPage.loginEmail().type(user.email[0]);
    accountLoginPage.loginPass().type(user.password);
    accountLoginPage.loginButton();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.');
  })
})

describe('login with wrong pass', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    accountLoginPage.loginEmail().type(user.email);
    accountLoginPage.loginPass().type(user.password[0]);
    accountLoginPage.loginButton();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.');
  })
})