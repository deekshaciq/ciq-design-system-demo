// import { defineConfig } from 'cypress';
//
// export default defineConfig({
//     component: {
//         devServer: {
//             framework: 'react',
//             bundler: 'vite',
//         },
//         specPattern: 'src/components/**/*.cy.{js,jsx,ts,tsx}',
//         supportFile: 'cypress/support/component.tsx',
//         videosFolder: 'cypress/videos',
//         screenshotsFolder: 'cypress/screenshots',
//     },
//     viewportWidth: 1000,
//     viewportHeight: 800,
// });

import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: 'src/components/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component-index.ts',
        indexHtmlFile: 'cypress/support/component-index.html',
    },
    viewportWidth: 1000,
    viewportHeight: 800,
});