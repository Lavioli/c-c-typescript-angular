import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I Open the home page', () => {
  cy.visit('/');
});
