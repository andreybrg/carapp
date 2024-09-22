import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { catalogAPI } from './catalogAPI'

const initialState = {
    data: {
        list: [],
        totalCount: 0
    },
    isInit: false,
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
    }
})

export const {  } = catalogSlice.actions
export default catalogSlice.reducer