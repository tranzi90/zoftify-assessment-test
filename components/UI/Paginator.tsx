import { FC } from 'react'
import { Pagination, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setCurrentPage, setPostsPerPage } from '../../store/postSlice'
import {
    selectCurrentPage,
    selectFilter,
    selectPosts,
    selectPostsPerPage,
} from '../../store/selectors'

const Paginator: FC = () => {
    const currentPage = useAppSelector(selectCurrentPage)
    const postsPerPage = useAppSelector(selectPostsPerPage)
    const selectedFilter = useAppSelector(selectFilter)
    const totalPosts = useAppSelector(selectPosts).filter((post) =>
        selectedFilter === 'All statuses'
            ? true
            : post.status === selectedFilter
    ).length

    const dispatch = useAppDispatch()

    return (
        <div className="paginator">
            <div className="postsCounter">
                <Select
                    defaultValue={postsPerPage}
                    onChange={(value) => dispatch(setPostsPerPage(value))}
                    suffixIcon={
                        <svg
                            width="14"
                            height="7"
                            viewBox="0 0 14 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.28 0.966675L7.9333 5.31334C7.41997 5.82668 6.57997 5.82668 6.06664 5.31334L1.71997 0.966675"
                                stroke="#111111"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    }
                >
                    <Select.Option value={5}>5</Select.Option>
                    <Select.Option value={10}>10</Select.Option>
                    <Select.Option value={20}>20</Select.Option>
                </Select>
                <div>
                    Showing {(currentPage - 1) * postsPerPage + 1} -{' '}
                    {currentPage * postsPerPage > totalPosts
                        ? totalPosts
                        : currentPage * postsPerPage}{' '}
                    of {totalPosts}
                </div>
            </div>
            <Pagination
                current={currentPage}
                onChange={(page) => dispatch(setCurrentPage(page))}
                pageSize={postsPerPage}
                total={totalPosts}
            />
        </div>
    )
}

export default Paginator
