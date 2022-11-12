import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {stubData} from "./stubData"
import {Post} from "../types/Post"

type PostsState = {
    posts: Post[],
    searchInput: string
}

const initialState: PostsState = {
    posts: stubData,
    searchInput: ''
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload)
        },
        setStatus(state, action: PayloadAction<{ id: number; status: string }>) {
            const changedPost = state.posts.find((post) => post.id === action.payload.id)
            if (changedPost)
                changedPost.status = action.payload.status
        },
        setSearchInput(state, action: PayloadAction<string>) {
            state.searchInput = action.payload
        },
    }
})

export const {addPost, setStatus, setSearchInput} = postSlice.actions

export default postSlice.reducer
