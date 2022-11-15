import Input from "./UI/Input"
import StatusSelect from "./UI/StatusSelect"
import {DatePicker, Form, Select, } from "antd"
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
        <Form layout="vertical"
            onFinish={addTask}
        >
            <Form.Item noStyle>
                <Input
                        placeholder="Title"
                        value={newPost.title}
                        changeHandler={(e) => setNewPost(
                            (prev) => ({ ...prev, title: e })
                        )}
                    />
            </Form.Item>
            <Form.Item noStyle
                name="status"
                rules={[
                {
                    required: true,
                    message: 'Please select a status',
                },
            ]}
            >
                <StatusSelect
                            value=''
                            formInput={true}
                            onChange={(e) => setNewPost(
                                (prev) => ({ ...prev, status: e })
                            )}
                        />
            </Form.Item>
            <Form.Item noStyle
                name="date"
                rules={[
                    {
                        required: true,
                        message: 'Please select a date',
                    },
                ]}
            >
                             <DatePicker
                                showTime
                                placeholder="Time"
                                onChange={(e, date) =>
                                    setNewPost((prev) => ({...prev, date}))
                                }
                        />
            </Form.Item>
            <Form.Item noStyle>
                <Button type="submit" title="Submit" />
            </Form.Item>
        </Form>
        // <form onSubmit={addTask}>
        //     <Input
        //         placeholder="Title"
        //         value={newPost.title}
        //         changeHandler={(e) => setNewPost(
        //             (prev) => ({ ...prev, title: e })
        //         )}
        //     />
        //     <StatusSelect
        //         formInput={true}
        //         changeHandler={(e) => setNewPost(
        //             (prev) => ({ ...prev, status: e })
        //         )}
        //     />
        //     <div className="datePicker">
        //         <DatePicker
        //             showTime
        //             placeholder="Time"
        //             onChange={(e, date) =>
        //                 setNewPost((prev) => ({...prev, date}))
        //             }
        //         />
        //     </div>
        //     <Button type="submit" title="Submit" />
        // </form>
    )
}

export default PostForm