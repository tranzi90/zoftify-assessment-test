import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postReducer from "./postSlice"

const persistConfig = {
    key: 'root',
    storage,
}

export const store = configureStore({
    reducer: {
        posts: postReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch