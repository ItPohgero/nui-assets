import { DatePicker } from "antd"
import AntdProvider from '../theme/antd.provider'
import { DatePickerRangeProps } from "../interface/DatePickerRangeProps"

const DatePickerRange = (props: DatePickerRangeProps) => {
    const {
        picker
    } = props
    return (
        <AntdProvider>
            <DatePicker.RangePicker
                picker={picker}
                {...props}
            />
        </AntdProvider>
    )
}

export default DatePickerRange