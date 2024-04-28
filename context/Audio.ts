import {createSlice} from "@reduxjs/toolkit";

const initialPlayingState = {
    playing: true,
    sound: null,
    status: {},
    position: 0,
    duration: 0,
    remaining: 0,
    isSeeking: false,
    isBuffer: true,
    lyrics: "",
    highlightLine: "",
}

const audioSlice = createSlice({
    name: 'audio',
    initialState: initialPlayingState,
    reducers: {
        setPlaying(state, actions) {
            state.playing = actions.payload;
        },
        setSound(state, actions) {
            state.sound = actions.payload;
        },
        setStatus(state, actions) {
            state.status = actions.payload;
        },
        setPosition(state, actions) {
            state.position = actions.payload;
        },
        setDuration(state, actions) {
            state.duration = actions.payload;
        },
        setRemaining(state, actions) {
            state.remaining = actions.payload;
        },
        setIsSeeking(state, actions) {
            state.isSeeking = actions.payload;
        },
        setBuffer(state, actions) {
            state.isBuffer = actions.payload;
        },
        setLyrics(state, actions) {
            state.lyrics = actions.payload;
        },
        setHighlightLine(state, actions) {
            state.highlightLine = actions.payload;
        },
        
    }
})

export const {setPlaying, setBuffer, setDuration, setHighlightLine, setIsSeeking, setLyrics, setPosition, setRemaining, setSound, setStatus} = audioSlice.actions;
export default audioSlice.reducer;