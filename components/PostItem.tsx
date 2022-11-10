import {useAppDispatch} from "../store/hook"
import {setStatus} from "../store/postSlice"
import StatusSelect from "./UI/StatusSelect"
import {FC} from "react"
import {Post} from "../types/Post"

const PostItem: FC<Post> = ({id, title, status, date}) => {
    const dispatch = useAppDispatch()

    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{timeAgo.format(new Date(Date.parse(item.date)))}</td>
            <td>
                <StatusSelect
                    value={item.status}
                    handleChange={(e) => {
                        dispatch(setStatus({ status: e, id: item.id }));
                    }}
                />
            </td>
        </tr>
    )
}

export default PostItem