import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {stubData} from "./stubData"
import {Post} from "../types/Post"

type PostsState = {
    posts: Post[]
}

const initialState: PostsState = {
    posts: stubData
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload)
        },
        setStatus(state, action: PayloadAction<{ status: string; id: number }>) {
            const changedPost = state.posts.find((post) => post.id === action.payload.id)
            if (changedPost)
                changedPost.status = action.payload.status
        }
    }
})

export const {addPost, setStatus} = postSlice.actions

export default postSlice.reducer
