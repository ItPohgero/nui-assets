import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components';
import { useTable } from '../hooks';
import { ColumnsTable, DataTable, SummaryTable } from '../data/table';
const meta = {
    title: 'NIU/Table/Core',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleXXS: Story = {
    args: {
        useTableProps: useTable({
            summary: SummaryTable,
            options: {
                bordered: true,
                pagination: true
            },
            data: DataTable,
            columns: ColumnsTable
        })
    }
};