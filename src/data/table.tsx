import { TableColumn, TableColumnSummary } from "../components"

export const DataTable = [
    {
        name: "wahyu",
        age: 2
    }
]

export const ColumnsTable = [
    TableColumn({
        title: "abdi",
        data: "name"
    }),
    TableColumn({
        title: "abdi",
        data: "name"
    }),
]

export const SummaryTable = [
    TableColumnSummary(1, "total"),
    TableColumnSummary(1, "87"),
]