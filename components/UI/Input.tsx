import { FC } from "react"

interface IInput {
    placeholder: string;
    value: string;
    changeHandler: (e: string) => void;
}

const Input: FC<IInput> = ({ placeholder, value, changeHandler }) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={(e) => changeHandler(e.target.value)}
            required={true}
        />
    )
}

export default Input
