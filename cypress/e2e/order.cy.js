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
      cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(1) > div > mat-card > div:nth-child(2) > button').click();
      cy.contains('.mat-button-wrapper', ' Your Basket').click();
      cy.get('#checkoutButton').click();

      cy.get('[aria-label="Add a new address"]').click();
  
      cy.log('country')
      cy.get('[data-placeholder="Please provide a country."]').type(user.country)
  
      cy.log('name')
      cy.get('[data-placeholder="Please provide a name."]').type(user.name)
  
      cy.log('mobile ')
      cy.get('[data-placeholder="Please provide a mobile number."]').type(user.mobileNumber)
  
      cy.log('zip')
      cy.get('[data-placeholder="Please provide a ZIP code."]').type(user.zipCode)
  
      cy.log('address')
      cy.get('#address').type(user.address)
  
      cy.log('city')
      cy.get('[data-placeholder="Please provide a city."]').type(user.city)
  
      cy.log('state')
      cy.get('[data-placeholder="Please provide a state."]').type(user.state)
  
      cy.log('submitButton')
      cy.get('#submitButton').click()
  
      cy.log('выбор адреса')
      cy.get('.mat-radio-inner-circle.mat-radio-inner-circle').click();

      cy.log('выбор адреса                !!!')

      cy.log('submitButton')
      cy.get('#card > app-address > mat-card > button > span.mat-button-wrapper > span').click();
     
      cy.log('delivery speed')
      cy.get('#mat-radio-41').click()

      cy.log('submitButton')
      cy.get('app-delivery-method button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary mat-icon+span').click();
      
      cy.log('delivery speed')
      cy.get('#mat-expansion-panel-header-0').click()
      
      cy.log('name')
      cy.get('#mat-input-14').type(user.name)
      
      cy.log('card')
      cy.get('#mat-input-15').type(1234123412341234)
  
      cy.log('month')
      cy.get('#mat-input-16').select('1')
      
      cy.log('year')
      cy.get('#mat-input-17').select('2083')
     
  
      cy.get('#submitButton  span.mat-button-wrapper').click()
  
      cy.get('#mat-radio-44').click();
  
      cy.get('mat-card button+button mat-icon+span').click();
  
      cy.get('#checkoutButton').click()
      
      cy.get('.confirmation').should('contain', 'Thank you for your purchase!')
 
 
 
 
 
    })
})
 