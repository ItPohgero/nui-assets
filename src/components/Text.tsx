import { TextProps } from '../interface/TextProps'
const Text = (props: TextProps) => {
    const { value, color, size } = props
    return (
        <p style={{ color, fontSize: size }}>{value}</p>
    )
}
export default Text