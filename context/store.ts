import {configureStore} from "@reduxjs/toolkit";
import {dataReducer} from "./slice";
import audioReducer from "./Audio";
export const store = configureStore({
    reducer: {
        data: dataReducer,
        audio: audioReducer,
    }
})