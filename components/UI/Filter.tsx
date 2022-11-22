import { FC } from 'react'
import { useAppDispatch } from '../../store/hook'
import { setSelectedFilter } from '../../store/postSlice'
import style from '../../styles/Filter.module.scss'

interface IFilter {
    title: string
    count: number
    isActive?: boolean
}

const Filter: FC<IFilter> = ({ title, count, isActive }) => {
    const dispatch = useAppDispatch()

    return (
        <div
            className={`${style.filter} ${isActive && style.filter__active}`}
            onClick={() => dispatch(setSelectedFilter(title))}
        >
            <span>{title}</span>
            <span className={style.filter__count}>{count}</span>
        </div>
    )
}

export default Filter
