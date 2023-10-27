import { Pagination, Table as TableAntd } from "antd"
import AntdProvider from "../theme/antd.provider"
import { TableProps } from "../interface/TableProps"
import { UseTableOptionProps, useRandom } from "../hooks"
import { Summary } from "../helper/Summary"
import { If, Then } from "react-if"

export function Table(props: TableProps): any {
    const { useTableProps, onChangePagination } = props
    const { data, columns, summary }: any = useTableProps
    const { x, y }: any = useTableProps?.scroll || {};
    return (
        <AntdProvider>
            <TableAntd
                className="rounded-2xl"
                bordered={useTableProps?.options?.bordered ?? true}
                pagination={false}
                scroll={{ x, y }}
                dataSource={data}
                columns={columns}
                summary={() => <Summary fixed data={summary} />}
            />
            <If condition={useTableProps?.options?.pagination ?? true}>
                <Then>
                    <div className="flex justify-start items-center w-full">
                        <Pagination
                            onChange={onChangePagination}
                            className="mt-8"
                            total={139}
                            showSizeChanger
                            showQuickJumper
                            showTotal={(total) => `Total ${total} items`}
                        />
                    </div>
                </Then>
            </If>
        </AntdProvider>
    )
}

interface TableColumnProps {
    title?: string,
    data: any
    sorter?: boolean
}
export function TableColumn(props: TableColumnProps): any {
    const { title, sorter, data } = props
    return {
        key: useRandom(),
        dataIndex: data,
        title: title && <strong>{title}</strong>,
        sorter: sorter ? { compare: () => true } : false,
        ...props,
    }
}


interface TableColumnSummaryProps {
    col: number,
    value: string
}
export function TableColumnSummary(col: TableColumnSummaryProps["col"], value: TableColumnSummaryProps["value"]): TableColumnSummaryProps {
    return { col, value }
}