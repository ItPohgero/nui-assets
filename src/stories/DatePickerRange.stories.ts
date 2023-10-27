import type { Meta, StoryObj } from '@storybook/react';
import DatePickerRange from '../components/DatePickerRange';
const meta = {
    title: 'Example/DatePickerRange',
    component: DatePickerRange,
    tags: ['autodocs'],
    argTypes: {
        picker: {
            options: ['year', 'month', 'week', 'quarter'],
            control: { type: 'radio' },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments'
            },
        },
    },
} satisfies Meta<typeof DatePickerRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerRangeExam: Story = {
    args: {
        picker: "year",
        placeholder: ["start", "end"]
    }
};