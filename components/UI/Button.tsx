import React, { FC } from "react";
import st from "./customButton.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    width: number;
    handleClick?: () => void;
}

const Button: FC<IButton> = ({ type, title, width, handleClick }) => {
    return (
        <button
            type={type}
            className={st.customButton}
            style={{ width: `${width}px` }}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default Button;
