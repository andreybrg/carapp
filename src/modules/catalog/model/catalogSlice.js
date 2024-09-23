import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
    },
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
    }
})

export const {  } = catalogSlice.actions
export default catalogSlice.reducer