import { Input } from 'antd'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setSearchInput } from '../../store/postSlice'

const { Search } = Input

const SearchBar: FC = () => {
    const searchInput = useAppSelector((state) => state.posts.searchInput)

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
