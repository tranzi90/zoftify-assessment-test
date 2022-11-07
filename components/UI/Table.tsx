import { FC } from "react";
import st from "./customTable.module.scss";

interface ICustomTable {
    children: JSX.Element;
}

const Table: FC<ICustomTable> = ({ children }) => {
    return <div className={st.customTable}>{children}</div>;
};

export default Table;
