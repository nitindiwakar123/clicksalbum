import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.posts.push(action.payload.post);
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        deletePosts: (state, action) => {
            state.posts = [];
        }
    }
});

export const {addPosts, setPosts, deletePosts} = postsSlice.actions;

export default postsSlice.reducer;