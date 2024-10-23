import type { Meta, StoryObj } from '@storybook/react';
import { SocialCard } from './SocialCard';

const meta = {
    title: 'Components/SocialCard',
    component: SocialCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        imageUrl: {
            control: 'text',
            description: 'URL of the post image',
        },
        accountName: {
            control: 'text',
            description: 'Name of the account',
        },
        likes: {
            control: 'number',
            description: 'Number of likes',
        },
        comments: {
            control: 'number',
            description: 'Number of comments',
        },
        width: {
            control: 'number',
            description: 'Width of the card in pixels',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof SocialCard>;

export default meta;
type Story = StoryObj<typeof SocialCard>;

export const Default: Story = {
    args: {
        imageUrl: '/racing-cars.png', // You'll need to add this image to your public folder
        accountName: 'Account Name',
        likes: 3900,
        comments: 17,
        width: 360,
    },
};

export const HighEngagement: Story = {
    args: {
        imageUrl: '/racing-cars.png',
        accountName: 'Popular Account',
        likes: 125000,
        comments: 1420,
        width: 360,
    },
};

export const NoEngagement: Story = {
    args: {
        imageUrl: '/racing-cars.png',
        accountName: 'New Account',
        likes: 0,
        comments: 0,
        width: 360,
    },
};

export const Wide: Story = {
    args: {
        imageUrl: '/racing-cars.png',
        accountName: 'Wide Layout',
        likes: 3900,
        comments: 17,
        width: 480,
    },
};