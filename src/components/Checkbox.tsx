import { Checkbox as CheckboxAntd } from "antd"
import AntdProvider from "../theme/antd.provider"
import { CheckboxProps } from "../interface/CheckboxProps"
const Checkbox = (props: CheckboxProps) => {
    return (
        <AntdProvider>
            <CheckboxAntd {...props} />
        </AntdProvider>
    )
}

export default Checkbox