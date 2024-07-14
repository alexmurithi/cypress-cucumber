function extendConstructor<T extends new (...args: any[]) => {}>(
  constructor: T
): T {
  const selector: string = this.selector;
  return class extends constructor {
    get po(): Cypress.Chainable {
      return cy.get(selector);
    }
  };
}

/**
 * Source https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
 *
 * Extends the class defining the getter for the po object
 *
 * @param selector cypress selector for the po object
 */
export function Po(selector: string): typeof extendConstructor {
  return extendConstructor.bind({ selector });
}
