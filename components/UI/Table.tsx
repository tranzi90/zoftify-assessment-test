import PostItem from '../PostItem'
import { useAppSelector } from '../../store/hook'
import React, { FC } from 'react'
import style from '../../styles/Table.module.scss'
import PostCard from '../PostCard'

const Table: FC = () => {
    const searchInput = useAppSelector((state) => state.posts.searchInput)
    const selectedFilter = useAppSelector((state) => state.posts.selectedFilter)
    const currentPage = useAppSelector((state) => state.posts.currentPage)
    const postsPerPage = useAppSelector((state) => state.posts.postsPerPage)

    const visiblePosts = useAppSelector((state) =>
        state.posts.posts
            .filter((post) =>
                searchInput ? post.title.includes(searchInput) : true
            )
            .filter((post) =>
                selectedFilter === 'All statuses'
                    ? true
                    : post.status === selectedFilter
            )
            .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    )

    return (
        <>
            <table className={style.postsTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {visiblePosts.map((post) => (
                        <PostItem key={post.id} {...post} />
                    ))}
                </tbody>
            </table>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {visiblePosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </>
    )
}

export default Table
