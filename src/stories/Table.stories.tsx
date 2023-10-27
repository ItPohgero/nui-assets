import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components';
import { useTable as useTableCore } from '../hooks';
import { ColumnsTable, DataTable, SummaryTable } from '../data/table';

const meta = {
    title: 'NIU/Table/Core',
    component: Table,
    tags: ['autodocs'],
} as Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = (args: any) => {
    const useTableProps: any = useTableCore({
        summary: SummaryTable,
        options: {
            bordered: true,
            pagination: true,
        },
        data: DataTable,
        columns: ColumnsTable,
    });

    return <Table widthNumber {...args} useTableProps={useTableProps} OnChangePagination={() => {}} />;
};

Example.args = {};
