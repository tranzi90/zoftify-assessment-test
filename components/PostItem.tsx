import {useAppDispatch} from "../store/hook"
import {setStatus} from "../store/postSlice"
import StatusSelect from "./UI/StatusSelect"
import {FC} from "react"
import {Post} from "../types/Post"
import {DateTime} from "luxon"

const PostItem: FC<Post> = ({id, title, status, date}) => {
    const dispatch = useAppDispatch()

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{Date.parse(date) ? DateTime.fromISO(date).toRelative() : date}</td>
            <td>
                <StatusSelect
                    value={status}
                    changeHandler={(e) => {
                        dispatch(setStatus({ status: e, id }))
                    }}
                />
            </td>
        </tr>
    )
}

export default PostItem