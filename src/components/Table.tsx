import { Table as TableAntd } from "antd"
import AntdProvider from "../theme/antd.provider"
import { TableProps } from "../interface/TableProps"
import { UseTableOptionProps, UseTableProps, useTable } from "../hooks"
import { Summary } from "../helper/Summary"

export function Table(props: TableProps): any {
    const { useTableProps } = props
    const { data, columns, summary }: any = useTableProps
    const { pagination = false, bordered = true }: UseTableOptionProps | any = useTableProps?.options
    const { x, y }: any = useTableProps?.scroll || {};
    return (
        <AntdProvider>
            <TableAntd
                className="rounded-2xl"
                bordered={bordered}
                pagination={pagination}
                scroll={{ x, y }}
                dataSource={data}
                columns={columns}
                summary={() => <Summary fixed data={summary} />}
            />
        </AntdProvider>
    )
}