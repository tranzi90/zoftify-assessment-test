import { FC } from 'react'

interface IContainer {
    children: JSX.Element
}

const Container: FC<IContainer> = ({ children }) => {
    return <div className="my-4 mx-5 py-4 rounded-lg bg-white">{children}</div>
}

export default Container
