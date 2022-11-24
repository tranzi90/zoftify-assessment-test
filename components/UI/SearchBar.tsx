import { Input } from 'antd'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setSearchInput } from '../../store/postSlice'
import { selectSearchInput } from '../../store/selectors'

const { Search } = Input

const SearchBar: FC = () => {
    const searchInput = useAppSelector(selectSearchInput)

    const dispatch = useAppDispatch()

    return (
        <div className="searchBar">
            <Search
                value={searchInput}
                onChange={(e) => dispatch(setSearchInput(e.target.value))}
                placeholder="Search"
                allowClear
            />
        </div>
    )
}
export default SearchBar
