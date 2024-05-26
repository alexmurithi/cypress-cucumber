import { Given } from "cypress-cucumber-preprocessor/steps";

Given("The SalesAgent Workspace Login Page", () => {
  cy.visit("https://dcamdev.dtbafrica.com/AppBuilder/#/SalesAgentHome"),
    {
      onBeforeLoad: (contentWindow: Window): void => {
        contentWindow.localStorage.clear();
      },
    };
});
