import React from 'react';
import {mount} from 'cypress/react18';
import {Button} from './Button';

describe('Button Component', () => {
    it('renders with default props', () => {
        mount(<Button>Default Button</Button>);
        cy.get('button').contains('Default Button').should('exist');
        cy.get('button').should('have.class', 'MuiButton-containedPrimary');
    });

    it('renders with custom variant, size, and color', () => {
        mount(<Button variant="outlined" size="large" color="secondary">Custom Button</Button>);
        cy.get('button').contains('Custom Button').should('exist');
        cy.get('button').should('have.class', 'MuiButton-outlinedSecondary');
        cy.get('button').should('have.class', 'MuiButton-sizeLarge');
    });

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        mount(<Button ref={ref}>Button with Ref</Button>);
        cy.get('button').contains('Button with Ref').then(($btn) => {
            expect($btn[0]).to.be.instanceOf(HTMLButtonElement);
        });
    });

    it('handles click events', () => {
        const clickHandler = cy.stub();
        mount(<Button onClick={clickHandler}>Clickable Button</Button>);
        cy.get('button').contains('Clickable Button').click().then(() => {
            expect(clickHandler).to.have.been.calledOnce;
        });
    });
});