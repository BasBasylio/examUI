import { faker } from '@faker-js/faker'; 
import user from '../fixtures/user.json';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';
import {registerUser} from '../support/helper';

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 4});

describe('correct login', () => {
  it.only('passes', () => {  

    // accountCreatePage.registerUserWithValidCredentials()

    accountCreatePage.registerVisit()
  
    accountCreatePage.registerGetEmailField().type(user.email);
    accountCreatePage.registerGetPasswordField().type(user.password + user.passwordPref);
    accountCreatePage.registerGetPasswordConfirmField().type(user.password + user.passwordPref);
    
    accountCreatePage.registerGetQuestion();
    accountCreatePage.registerGetSubmitRegistrationFormButton();

   // accountLoginPage.loginAccount()
 
    accountLoginPage.loginEmail().type(user.email);
    accountLoginPage.loginPass().type(user.password + user.passwordPref);
    accountLoginPage.loginButton();
  })
})

describe('login with wrong email', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    accountLoginPage.loginEmail().type(user.email+user.email);
    accountLoginPage.loginPass().type(user.password + user.passwordPref);
    accountLoginPage.loginButton();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.');
  })
})

describe('login with wrong pass', () => {
  it('passes', () => {
    accountLoginPage.loginVisit();
    accountLoginPage.loginEmail().type(user.email+user.email);
    accountLoginPage.loginPass().type(user.password + user.passwordPref);
    accountLoginPage.loginButton();
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.');
  })
})