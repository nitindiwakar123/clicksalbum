import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth";
import postsSlice from "../features/posts/posts";
import reelsSlice from "../features/reels/reels";
import storiesSlice from "../features/stories/stories";

const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postsSlice,
        reels: reelsSlice,
        stories: storiesSlice,
    }
});

export default store;