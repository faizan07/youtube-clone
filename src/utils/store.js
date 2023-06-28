import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";
import registerSlice from "./registerSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        video: videoSlice,
        chat: chatSlice,
        registration: registerSlice
    }
});

export default store;