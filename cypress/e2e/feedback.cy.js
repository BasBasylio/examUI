import { faker } from '@faker-js/faker'; 
import feedbackPage from '../support/pages/FeedbackPage';
import user from '../fixtures/user.json';

user.comment = faker.number.bigInt({ length: 161 }).toString();
user.captcha = faker.number.bigInt({ length: 1 });


it.only('no comment', () => {  

    feedbackPage.feedbackVisit();
    cy.get('#comment').click()
    cy.get('#captchaControl').click()
    cy.get('#mat-error-0').should('contain', 'Please provide a comment. ');
    
  })

  it.only('no captcha', () => {  

    feedbackPage.feedbackVisit();
    cy.get('#captchaControl').click()
    cy.get('#comment').click()
   
    cy.get('#mat-error-1').should('contain', 'Please enter the result of the CAPTCHA. ');
    cy.log('ok')
  })
