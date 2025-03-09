import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stories: []
}

const storiesSlice = createSlice({
    name: "stories",
    initialState,
    reducers: {
        addStories: (state, action) => {
            state.stories.push(action.payload.story);
        },
        setStories: (state, action) => {
            state.stories = action.payload.stories;
        },
        deleteStories: (state, action) => {
            state.stories = [];
        }
    }
});

export const {addStories, setStories, deleteStories} = storiesSlice.actions;

export default storiesSlice.reducer;