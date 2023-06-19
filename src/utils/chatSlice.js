import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message:[]
    },
    reducers: {
        addChat : (state, action) => {
            state.message.unshift(action.payload);
            state.message.splice(10, 1);
        }
    }
})

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;