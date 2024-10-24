// cypress/support/component/commands.ts
import { mount } from 'cypress/react18';

// Add mount command
Cypress.Commands.add('mount', mount);

// Augment the Cypress namespace to include type definitions for
// your custom command.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}