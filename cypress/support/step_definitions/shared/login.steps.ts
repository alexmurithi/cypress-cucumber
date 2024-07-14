import { When } from '@badeball/cypress-cucumber-preprocessor';
import {
  CredentialsFixture,
  SybLoginPo,
} from '../../../libs/ui/login/login.po';
import { salesAgentCredentials } from '../../../e2e/salesagent/salesagent-credentials.fixture';

export const loginStep = (credentials: CredentialsFixture) => {
  const loginPage: SybLoginPo = new SybLoginPo(
    cy.get('.card-container.ng-trigger.ng-trigger-openClose')
  );
  loginPage.loginRegression(credentials);
};

When('I login as a sales agent', () => {
  loginStep(salesAgentCredentials);
  //   cy.get('.card-container.ng-trigger.ng-trigger-openClose').should(
  //     'have.length',
  //     1
  //   );
  //   cy.get('input');
  //   cy.get('#usernameBox').should('exist').type('Admin');
  //   cy.get('#passwordBox').type('Sybr!n12345');
  //   cy.get('#btn_logon').click();
});
