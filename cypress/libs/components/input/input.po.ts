import { SybBasePo } from '../../../utils';
import { Po } from '../../../utils/decorators';

@Po('@input')
export class SybInputPo extends SybBasePo {
  constructor(po: Cypress.Chainable) {
    super();
    po.as('input');
  }

  type(value: string): void {
    this.textInput.should('have.length', 1);
    this.textInput.type(value);
  }

  clear(): void {
    this.textInput.clear();
  }
  private get textInput(): Cypress.Chainable {
    return this.po.find('input, textarea');
  }
}
