import PostItem from '../PostItem'
import { useAppSelector } from '../../store/hook'
import { FC } from 'react'
import style from '../../styles/Table.module.scss'

const Table: FC = () => {
    const searchInput = useAppSelector((state) => state.posts.searchInput)
    const selectedFilter = useAppSelector((state) => state.posts.selectedFilter)

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
    )

    return (
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
    )
}

export default Table
