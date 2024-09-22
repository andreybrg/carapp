import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        
    },
    isInit: false,
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
    }
})

export const {  } = cardSlice.actions
export default cardSlice.reducer