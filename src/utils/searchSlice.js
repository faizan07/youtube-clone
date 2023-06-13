import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{

    },
    reducers:{
        cacheSlice : (state, action) => {
            state = Object.assign(state, action.payload)
        },
    }
})

export const {cacheSlice} = searchSlice.actions;

export default searchSlice.reducer;