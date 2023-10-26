import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
const meta = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['button', 'submit'],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' }
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
    args: {
        type: 'button',
    }
};