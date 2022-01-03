import React from 'react'
import './Button.css';
const Button = ({text,onClick}) => {
    return (
        <div className='button_container'>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
        