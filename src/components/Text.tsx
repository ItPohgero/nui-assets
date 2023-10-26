import { TextProps } from '../interface/TextProps'
export function Button(props: TextProps): any {
    const { value, color, size } = props
    return (
        <p style={{ color, fontSize: size }}>{value}</p>
    )
}
export default Text