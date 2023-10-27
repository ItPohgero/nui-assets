import { UseTableProps } from "../hooks"

export interface TableProps {
    useTableProps: UseTableProps
    onChangePagination?: (page: number, pageSize: number) => void
}