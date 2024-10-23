import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text'],
            description: 'The variant to use',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the button',
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'error'],
            description: 'The color of the button',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: (args) => <Button {...args}>Primary Button</Button>,
    args: {
        variant: 'contained',
        color: 'primary',
        size: 'medium',
    },
};

export const Secondary: Story = {
    render: (args) => <Button {...args}>Secondary Button</Button>,
    args: {
        variant: 'outlined',
        color: 'secondary',
        size: 'medium',
    },
};

export const Small: Story = {
    render: (args) => <Button {...args}>Small Button</Button>,
    args: {
        size: 'small',
        variant: 'contained',
    },
};

export const Large: Story = {
    render: (args) => <Button {...args}>Large Button</Button>,
    args: {
        size: 'large',
        variant: 'contained',
    },
};

export const Error: Story = {
    render: (args) => <Button {...args}>Error Button</Button>,
    args: {
        color: 'error',
        variant: 'contained',
    },
};