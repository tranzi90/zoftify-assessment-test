import React, { FC } from 'react'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const Button: FC<IButton> = ({ title, type }) => {
    return (
        <button
            type={type}
            className="w-[163px] text-white bg-primary-blue py-[10px] px-3 rounded-lg cursor-pointer"
        >
            {title}
        </button>
    )
}

export default Button
