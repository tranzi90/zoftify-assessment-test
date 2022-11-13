import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {stubData} from "./stubData"
import {Post} from "../types/Post"

type PostsState = {
    posts: Post[],
    searchInput: string,
    selectedFilter: string
}

const initialState: PostsState = {
    posts: stubData,
    searchInput: '',
    selectedFilter: "All statuses"
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
        setSelectedFilter(state, action: PayloadAction<string>) {
            state.selectedFilter = action.payload
        },
    }
})

export const {addPost, setStatus, setSearchInput, setSelectedFilter} = postSlice.actions

export default postSlice.reducer
