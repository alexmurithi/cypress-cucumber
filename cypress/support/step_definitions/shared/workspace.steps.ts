import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('The SalesAgent Workspace Login Page', () => {
  cy.visit('https://dcamdev.dtbafrica.com/AppBuilder/#/SalesAgentHome');
});
