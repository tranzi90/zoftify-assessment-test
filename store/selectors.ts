import { RootState } from './index'

const selectSearchInput = (state: RootState) => state.posts.searchInput
const selectFilter = (state: RootState) => state.posts.selectedFilter
const selectCurrentPage = (state: RootState) => state.posts.currentPage
const selectPostsPerPage = (state: RootState) => state.posts.postsPerPage
const selectPosts = (state: RootState) => state.posts.posts

export {
    selectSearchInput,
    selectFilter,
    selectPostsPerPage,
    selectCurrentPage,
    selectPosts,
}
