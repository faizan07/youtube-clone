import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'registration',
    initialState:{
        user:{}
    },
    reducers:{
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {addUser} = registerSlice.actions;

export default registerSlice.reducer