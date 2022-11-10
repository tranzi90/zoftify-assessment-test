import Input from "./UI/Input"
import StatusSelect from "./UI/StatusSelect"
import {DatePicker} from "antd"
import Button from "./UI/Button"
import {addPost} from "../store/postSlice"
import {FC, useState} from "react"
import {Post} from "../types/Post"
import {useAppDispatch, useAppSelector} from "../store/hook"

const PostForm: FC = () => {
    const posts = useAppSelector(state => state.posts.posts)

    const emptyPost = {
        id: posts.length + 1,
        title: "",
        date: "",
        status: "",
    }

    const [newPost, setNewPost] = useState<Post>(emptyPost)

    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addPost(newPost))
        setNewPost(emptyPost)
    }

    return (
        <form onSubmit={addTask}>
            <Input
                placeholder="Title"
                value={newPost.title}
                setValue={(e) => handleChange("title", e)}
                isError={isError.title}
            />
            <StatusSelect
                isError={isError.status}
                handleChange={(e) => handleChange("status", e)}
            />
            <DatePicker />
            <Button type="submit" title="Submit" width={163} />
        </form>
    )
}

export default PostForm