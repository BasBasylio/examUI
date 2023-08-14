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
  
     
      cy.get('.mat-radio-inner-circle.mat-radio-inner-circle').click();
  
      cy.log('submitButton')
      cy.get('#card > app-address > mat-card > button > span.mat-button-wrapper > span').click();
  
      cy.log('submitButton')
      cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-delivery-method > mat-card > div:nth-child(4) > mat-table > mat-row:nth-child(2) > mat-cell.mat-cell.cdk-cell.cdk-column-Selection.mat-column-Selection.ng-star-inserted').click();
  
      cy.log('submitButton')
      cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-delivery-method > mat-card > div:nth-child(5) > button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary > span.mat-button-wrapper > span').click();
  
      cy.get('#mat-expansion-panel-header-0').click()
      
      cy.log('name')
      cy.get('#mat-input-14').type(user.name)
      
      cy.log('card')
      cy.get('#mat-input-15').type(1234123412341234)
  
      cy.log('month')
      cy.get('#mat-input-16').click()
      cy.select('_ngcontent-ghn-c232').should('contain', '1')
  
      cy.log('year')
      cy.get('#mat-input-17').click()
      cy.select('_ngcontent-ghn-c232').should('contain', '2083')
  
      cy.get('#submitButton > span.mat-button-wrapper').click()
  
      cy.get('#mat-radio-44').check()
  
      cy.contains('.mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color', 'Continue').click();
  
      cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-payment > mat-card > div > div:nth-child(9) > button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary > span.mat-button-wrapper > span').click()
 
 
 
 
 
    })
})
   
    /*  .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phoneNumber);

    cy.get('.table.confirm_payment_options')
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phoneNumber);

    cy.log('Confirm order')
    cy.get('#checkout_btn').click();

    cy.log('Thank you page displayed')
    cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
  })

  it('Place order HW', () => {

    loginViaUI(user);

    cy.log('Add random product to cart from main page')
    cy.visit('/');

    cy.get('input#filter_keyword').type('i{enter}');

    findProductByName('qweqwe');

    cy.get('.productpagecart .cart').click();

    cy.log('Open basket')
    cy.get('#cart_checkout1').click();

    cy.log('Verify checkout data')
    cy.get('.table.confirm_shippment_options')
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phoneNumber);

    cy.get('.table.confirm_payment_options')
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phoneNumber);

    cy.log('Confirm order')
    cy.get('#checkout_btn').click();

    cy.log('Thank you page displayed')
    cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');*/
/* cy.log('Add random product to cart from main page')
    cy.get('button:first-of-type').click();
    
    cy.log('Open basket')
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

   
    cy.contains('mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted', 'user.name').click();

    cy.log('submitButton')
    cy.contains('.mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color', '>').click();

    cy.log('submitButton')
    cy.get('#mat-radio-41', 1).click();

    cy.log('submitButton')
    cy.get('.mat-expansion-panel-header-title ng-tns-c150-46').click();

    cy.log('name')
    cy.get('#mat-input-21').type(1234123412341234)

    cy.get('#mat-input-23').click()

    cy.contains('.ng-star-inserted', '2').click();

    cy.contains('#mat-input-24d', '2083').click();

    cy.get('.mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-tns-c149-45').click()

    cy.get('#mat-radio-48').check()

    cy.contains('.mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color', 'Continue').click();

    cy.get('#checkoutButton').click()*/