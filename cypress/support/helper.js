///<reference types="cypress"/>
import { faker } from '@faker-js/faker'; 
import user from '../fixtures/user.json';
import {loginViaUI, login2, login3} from '../support/helper';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8, prefix: '!Qq1' });



export function registerUser(user) {
    accountCreatePage.registerVisit()
  
    accountCreatePage.registerGetEmailField().type(user.email)
    accountCreatePage.registerGetPasswordField().type(user.password)
    accountCreatePage.registerGetPasswordConfirmField().type(user.password)
    
    accountCreatePage.registerGetQuestion();
    accountCreatePage.registerGetSubmitRegistrationFormButton();
  
}

export function login(user) {
        accountLoginPage.visit();
        accountLoginPage.loginEmail();
        accountLoginPage.loginPass();
        accountLoginPage.loginButton();

}

export function loginViaUI(user) {
    loginPage.visit();

    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();
}

export function login2(user) {
    loginPage.visit();

    cy.get('#email').type(user.email+'f');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();
    
}

export function login3(user) {
    loginPage.visit();

    cy.get('#email').type(user.email);
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('#password').type(user.password+'f');
    cy.get('#loginButton').click();
    
}

export function findProductByName(productName) {                             //запускає пошук
    cy.get('body').then(body => {                                            //вичитуємо body на предмет
        if (body.find(`.prdocutname[alt="${productName}"]`).length > 0) {  //чи знаходиться на цій сторінці(в цьому body) потрібний продукт
            cy.get(`.prdocutname[alt="${productName}"]`).click();          //якщо є, клікаємо на нього
        } else {                     
            cy.contains('.mat-paginator-icon a', '>').click();                       //якщо продукт не знайдено, клікаємо на "наступну сторінку" 
            findProductByName(productName);                                  //рекурсія - функція викликає сама себе
        }
})

}



