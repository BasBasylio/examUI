///<reference types="cypress"/>
import { faker } from '@faker-js/faker'; 
import user from '../fixtures/user.json';

import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1' });



export function registerUser(user) {
    accountCreatePage.registerVisit()
  
    accountCreatePage.registerGetEmailField().type(user.email);
    accountCreatePage.registerGetPasswordField().type(user.password);
    accountCreatePage.registerGetPasswordConfirmField().type(user.password);
    
    accountCreatePage.registerGetQuestion();
    accountCreatePage.registerGetSubmitRegistrationFormButton();
  
}

export function login(user) {
        accountLoginPage.loginEmail().type(user.email);
        accountLoginPage.loginPass().type(user.password);
        accountLoginPage.loginButton().click();


}
