interface Props {
    justCenter?: boolean
    justStart?: boolean
    justEnd?: boolean
    justBetween?: boolean
    justAround?: boolean
    justEvenly?: boolean
    itemStart?: boolean
    itemCenter?: boolean
    itemEnd?: boolean
    gap?: number
}
export const Justify = (props: Props) => {
    const JUST = (props: Props) => {
        if (props.justCenter) "justify-center"
        else if (props.justStart) "justify-start"
        else if (props.justEnd) "justify-end"
        else if (props.justAround) "justify-around"
        else if (props.justEvenly) "justify-evenly"
        else if (props.justBetween) "justify-between"
        return ""
    }
    const ALGN = (props: Props) => {
        if (props.itemCenter) "items-center"
        else if (props.itemStart) "items-start"
        else if (props.itemEnd) "items-end"
        return ""
    }
    return (
        <div className={`flex ${JUST(props)} ${ALGN(props)} gap[${props?.gap?.toString()}px]`}>Justify</div>
    )
}
