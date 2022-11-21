import { FC } from 'react'
import { Input } from 'antd'

interface IInputField {
    placeholder: string
    value: string
    onChange: (e: string) => void
}

const InputField: FC<IInputField> = ({ placeholder, value, onChange }) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default InputField
