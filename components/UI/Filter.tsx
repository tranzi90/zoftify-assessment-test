import { FC } from "react";
import st from "./customSwitcher.module.scss";

interface IFilter {
    title: string;
    count: number;
    isActive?: boolean;
    handleChange: () => void;
}

const Filter: FC<IFilter> = ({ title, count, isActive, handleChange }) => {
    return (
        <div
            className={`${st.customSwitcher} ${isActive && st.customSwitcher__active}`}
            onClick={handleChange}
        >
            <span className={st.customSwitcher__title}>{title}</span>
            <span className={st.customSwitcher__count}>{count}</span>
        </div>
    );
};

export default Filter;
