import { Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://google.com/store';

Then('I open store page', () => {
    cy.visit(url);
});
