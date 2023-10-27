import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components';
import { useTable } from '../hooks';
const meta = {
    title: 'NIU/Table/Core',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = (args: any) => {
    const useTableProps = useTable({
        summary: [
            {
                col: 1,
                value: "Total"
            },
            {
                col: 1,
                value: "3"
            },
        ],
        options: {
            pagination: false
        },
        data: [
            {
                name: "wahyu",
                age: 2
            }
        ],
        columns: [
            {
                title: "name",
                dataIndex: "name"
            },
            {
                title: "Age",
                dataIndex: "age"
            },
        ]
    });

    return <Table {...args} useTableProps={useTableProps} />;
};
Example.args = {};