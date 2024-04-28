import {createSlice} from "@reduxjs/toolkit";

const initialDataState = {
    data: {},
    error: false,
    Loading: true,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState: initialDataState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data;
            state.error = action.payload.error;
            state.Loading = action.payload.Loading;
        }
        
    }
});

export const { setData } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
