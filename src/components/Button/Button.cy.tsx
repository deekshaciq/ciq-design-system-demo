// import React from 'react';
// import { Button } from './Button';
//
// describe('Button Component', () => {
//     it('renders correctly', () => {
//         cy.mount(Test Button);
//         cy.get('button').should('exist');
//         cy.get('button').should('have.text', 'Test Button');
//     });
//
//     it('handles click events', () => {
//         const onClickSpy = cy.spy().as('onClickSpy');
//         cy.mount(Click Me);
//         cy.get('button').click();
//         cy.get('@onClickSpy').should('have.been.called');
//     });
//
//     it('applies variant styles', () => {
//         cy.mount(Outlined Button);
//         cy.get('button').should('have.class', 'MuiButton-outlined');
//     });
// });