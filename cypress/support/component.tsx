// import { mount } from 'cypress/react18';
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';
//
// const theme = createTheme();
//
// // Augment the Cypress namespace to include type definitions for
// // your custom command.
// declare global {
//     namespace Cypress {
//         interface Chainable {
//             mount: typeof mount;
//         }
//     }
// }
//
// Cypress.Commands.add('mount', (component, options = {}) => {
//     const wrapped = {component};
//     return mount(wrapped, options);
// });

import { mount } from 'cypress/react18';
import './commands';

// Augment the Cypress namespace to include type definitions for
// your custom command.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add('mount', mount);