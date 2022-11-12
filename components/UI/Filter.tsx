import { FC } from "react"

interface IFilter {
    title: string;
    count: number;
    isActive?: boolean;
    // handleChange: () => void;
}

const Filter: FC<IFilter> = ({ title, count, isActive, }) => {
    return (
        <div
            className={`filter ${isActive && "filter__active"}`}
            // onClick={handleChange}
        >
            <span>{title}</span>
            <span className="filter__count">{count}</span>
        </div>
    );
};

export default Filter;
