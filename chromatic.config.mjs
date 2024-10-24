// chromatic.config.mjs
module.exports = {
    buildScriptName: 'build-storybook',
    exitZeroOnChanges: true,
    skip: ['**/src/components/**/*.test.{js,jsx,ts,tsx}'],
    autoAcceptChanges: 'main',
    delay: 100,
};