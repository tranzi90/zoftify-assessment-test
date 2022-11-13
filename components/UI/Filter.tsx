import { FC } from "react"
import {useAppDispatch} from "../../store/hook"
import {setSelectedFilter} from "../../store/postSlice"

interface IFilter {
    title: string;
    count: number;
    isActive?: boolean;
}

const Filter: FC<IFilter> = ({ title, count, isActive }) => {
    const dispatch = useAppDispatch()

    return (
        <div
            className={`filter ${isActive && "filter__active"}`}
            onClick={() => dispatch(setSelectedFilter(title))}
        >
            <span>{title}</span>
            <span className="filter__count">{count}</span>
        </div>
    )
}

export default Filter
