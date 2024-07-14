import { SybBasePo } from '../../../utils';
import { Po } from '../../../utils/decorators';
import { SybInputPo } from '../../components/input/input.po';
import { SybButtonPo } from '../../components/button/button.po';

export interface CredentialsFixture {
  username: string;
  password: string;
}

@Po('@login')
export class SybLoginPo extends SybBasePo {
  constructor(po: Cypress.Chainable) {
    super();
    po.as('login');
  }

  loginRegression(credentials: CredentialsFixture): void {
    this.username.type(credentials.username);
    this.password.type(credentials.password);
    this.submit.click();
  }

  login(): void {
    this.username.type('Admin');
    this.password.type('Sybr!n12345');
    this.submit.click();
  }
  private get username(): SybInputPo {
    return new SybInputPo(this.po.find('#usernameBox'));
  }

  private get password(): SybInputPo {
    return new SybInputPo(this.po.find('#passwordBox'));
  }

  private get submit(): SybButtonPo {
    return new SybButtonPo(this.po.find('#btn_logon'));
  }
}
