import { Given } from "cypress-cucumber-preprocessor/steps";

Given("The SalesAgent Workspace Login Page", () => {
  // Your implementation here
  cy.visit("/login");
});
