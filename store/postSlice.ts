import {createSlice} from "@reduxjs/toolkit"
import {stubData} from "./stubData"

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: stubData
    },
    reducers: {

    }
})
