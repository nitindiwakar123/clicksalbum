import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    reels: []
}

const reelsSlice = createSlice({
    name: "reels",
    initialState,
    reducers: {
        addReels: (state, action) => {
            state.reels.push(action.payload.reel);
        },
        setReels: (state, action) => {
            state.reels = action.payload.reels;
        },
        deleteReels: (state, action) => {
            state.reels = [];
        }
    }
});

export const {addReels, setReels, deleteReels} = reelsSlice.actions;
export default reelsSlice.reducer;