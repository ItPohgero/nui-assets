import { Pagination, Table as TableAntd } from "antd"
import AntdProvider from "../theme/antd.provider"
import { TableProps } from "../interface/TableProps"
import { UseTableOptionProps } from "../hooks"
import { Summary } from "../helper/Summary"
import { If, Then } from "react-if"

export function Table(props: TableProps): any {
    const { useTableProps, onChangePagination } = props
    const { data, columns, summary }: any = useTableProps
    const { pagination = false, bordered = true }: UseTableOptionProps | any = useTableProps?.options
    const { x, y }: any = useTableProps?.scroll || {};
    return (
        <AntdProvider>
            <TableAntd
                className="rounded-2xl"
                bordered={bordered}
                pagination={false}
                scroll={{ x, y }}
                dataSource={data}
                columns={columns}
                summary={() => <Summary fixed data={summary} />}
            />
            <If condition={pagination}>
                <Then>
                    <div className="flex justify-center w-full">
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