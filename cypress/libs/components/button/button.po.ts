import { SybBasePo } from '../../../utils';
import { Po } from '../../../utils/decorators';
@Po('@button')
export class SybButtonPo extends SybBasePo {
  constructor(po: Cypress.Chainable) {
    super();
    po.as('button');
  }

  click(): void {
    this.po.click();
  }
}
