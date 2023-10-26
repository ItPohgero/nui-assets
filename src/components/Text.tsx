import { TextProps } from '../interface/TextProps'
export function Text(props: TextProps): any {
    const { value, color, size } = props
    return (
        <p style={{ color, fontSize: size }}>{value}</p>
    )
}