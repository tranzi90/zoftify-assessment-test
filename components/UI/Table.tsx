import PostItem from "../PostItem"
import {useAppSelector} from "../../store/hook"
import {FC} from "react"

const Table: FC = () => {
    const posts = useAppSelector(state => state.posts.posts)

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    {...post}
                />
            ))}
            </tbody>
        </table>
    )
}

export default Table
