import { Checkbox as CheckboxAntd } from "antd"
import AntdProvider from "../theme/antd.provider"
const Checkbox = () => {
    return (
        <AntdProvider>
            <CheckboxAntd>Checkbox</CheckboxAntd>
        </AntdProvider>
    )
}

export default Checkbox