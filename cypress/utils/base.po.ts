export class SybBasePo {
  protected readonly po: Cypress.Chainable;

  isVisible(): void {
    this.po.should('be.visible');
  }
}
