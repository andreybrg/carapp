import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        progress: 0,
        isInit: false,
    }
}

const progressbarSlice = createSlice({
    name: 'progressbar',
    initialState,
    reducers: {
        progressStart(state) {
            state.data.isInit = true
            state.data.progress = 0
        },
        progressDone(state) {
            state.data.progress = 1
        },
        progressAdd(state, action) {
            state.data.progress = state.data.progress+action.payload
        },
        resetProgress(state) {
            state.data.isInit = false
            state.data.progress = 0
        }
    }
})

export const { progressStart, progressDone, progressAdd, resetProgress } = progressbarSlice.actions
export default progressbarSlice.reducer