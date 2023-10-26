import React from 'react'
import { ButtonProps } from '../interface/ButtonProps'

const Button = (props: ButtonProps) => {
    const {
        onClick,
        type,
    } = props
    return (
        <button onClick={onClick} className='bg-red-300'>sButton</button>
    )
}

export default Button