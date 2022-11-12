import React, { FC } from "react"
import Link from "next/link"

// interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     title: string;
//     width: number;
//     handleClick?: () => void;
// }

const Button: FC = () => {
    return (
        <button
            className="w-[163px] text-white bg-primary-blue py-[10px] px-3 rounded-lg cursor-pointer"
        >

        </button>
    )
}

export default Button
