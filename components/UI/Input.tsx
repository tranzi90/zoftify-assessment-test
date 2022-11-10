import { FC } from "react"

interface IInput {
    isError: boolean;
    placeholder: string;
    value: string;
    setValue: (e: string) => void;
}

const Input: FC<IInput> = ({ isError, placeholder, value, setValue }) => {
    return (
        <input
            className={`${st.customInput} ${isError && st.customInput__isError}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={true}
        />
    );
};

export default Input
