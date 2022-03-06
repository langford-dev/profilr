import React from 'react'

const Button = ({ onPressed, label }) => {
    return <button onClick={onPressed} className='btn'>
        {label}
    </button>
}

export default Button