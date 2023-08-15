import { faker } from '@faker-js/faker';                              
import user from '../fixtures/user.json';  
import accountCreatePage from '../support/pages/AccountCreatePage';
import accountLoginPage from '../support/pages/AccountLoginPage';
//import { use } from 'chai';
                   
user.email = faker.internet.email();
user.password = faker.internet.password({ length: 4 });

describe('login with user', () => {
  it.only('ok', () => {
    
    accountCreatePage.registerVisit()
  
    accountCreatePage.registerGetEmailField().type(user.email)
    accountCreatePage.registerGetPasswordField().type(user.password + user.passwordPref)
    accountCreatePage.registerGetPasswordConfirmField().type(user.password + user.passwordPref)
    accountCreatePage.registerGetQuestion();
    accountCreatePage.registerGetSubmitRegistrationFormButton();
 
    accountLoginPage.loginEmail().type(user.email);
    accountLoginPage.loginPass().type(user.password + user.passwordPref);
    accountLoginPage.loginButton();
    cy.get('.ng-star-inserted').should('contain', 'All Products')

  })

  it('bad email', () => {
    accountCreatePage.registerVisit()
    accountCreatePage.registerGetEmailField().type(user.email + user.email)
    accountCreatePage.registerGetPasswordField().type(user.password + user.passwordPref)
    accountCreatePage.registerGetPasswordConfirmField().type(user.password + user.passwordPref)

    cy.get('.mat-error.ng-tns-c119-7.ng-star-inserted').should('contain', 'Email address is not valid.')

  })

  
  it('bad pass conf', () => {
    accountCreatePage.registerVisit()
    accountCreatePage.registerGetEmailField().type(user.email)
    accountCreatePage.registerGetPasswordField().type(user.password)
    accountCreatePage.registerGetPasswordConfirmField().type(user.password)

    cy.get('.mat-error.ng-tns-c119-8.ng-star-inserted').should('contain', 'Password must be 5-40 characters long. ')

  })

})
