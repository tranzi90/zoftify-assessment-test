import InputField from './UI/InputField'
import StatusSelect from './UI/StatusSelect'
import { DatePicker, Form } from 'antd'
import Button from './UI/Button'
import { addPost } from '../store/postSlice'
import { FC, useState } from 'react'
import { Post } from '../types/Post'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { useRouter } from 'next/router'
import { selectPosts } from '../store/selectors'

const PostForm: FC = () => {
    const posts = useAppSelector(selectPosts)

    const emptyPost = {
        id: posts.length + 1,
        title: '',
        date: '',
        status: '',
    }

    const [newPost, setNewPost] = useState<Post>(emptyPost)

    const dispatch = useAppDispatch()
    const router = useRouter()

    const addTask = () => {
        dispatch(addPost(newPost))
        setNewPost(emptyPost)
        router.push('/')
    }

    return (
        <Form className="newPostForm" layout="vertical" onFinish={addTask}>
            <Form.Item
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please enter some text',
                    },
                ]}
            >
                <InputField
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) =>
                        setNewPost((prev) => ({ ...prev, title: e }))
                    }
                />
            </Form.Item>
            <Form.Item
                name="status"
                rules={[
                    {
                        required: true,
                        message: 'Please select a status',
                    },
                ]}
            >
                <StatusSelect
                    value={newPost.status}
                    formInput={true}
                    onChange={(e) =>
                        setNewPost((prev) => ({ ...prev, status: e }))
                    }
                />
            </Form.Item>
            <Form.Item
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
                        setNewPost((prev) => ({ ...prev, date }))
                    }
                />
            </Form.Item>
            <Form.Item noStyle>
                <Button type="submit" title="Submit" />
            </Form.Item>
        </Form>
    )
}

export default PostForm
