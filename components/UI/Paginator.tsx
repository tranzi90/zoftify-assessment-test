import { FC } from 'react'
import { Pagination } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setCurrentPage } from '../../store/postSlice'

const Paginator: FC = () => {
    const currentPage = useAppSelector((state) => state.posts.currentPage)
    const postsPerPage = useAppSelector((state) => state.posts.postsPerPage)
    const totalPosts = useAppSelector((state) => state.posts.posts).length

    const dispatch = useAppDispatch()

    return (
        <div className="customPagination">
            <Pagination
                current={currentPage}
                onChange={(page, pageSize) => dispatch(setCurrentPage(page))}
                pageSize={postsPerPage}
                total={totalPosts}
                showSizeChanger
            />
        </div>
    )
}

export default Paginator
