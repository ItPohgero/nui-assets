import useColor from '../hooks/useColor'
import { TextProps } from '../interface/TextProps'
const Text = (props: TextProps) => {
    const { value, color, size } = props
    const { Amber } = useColor()
    return (
        <div style={{ color, fontSize: size }}>{value}</div>
    )
}
export default Text