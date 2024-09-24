import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { carRequestAPI } from './carRequestAPI'

export const createCarRequest = createAsyncThunk(
    'carRequest/createCarRequest',
    async (data, {dispatch}) => {
        let formData = new FormData()
        Object.keys(data).forEach( (key) => {
            formData.append(key, data[key])
        })
        try {
            await dispatch(carRequestAPI.endpoints.createCarRequest.initiate(formData))
        } catch(error) {
            console.log(error)
        }
    }
)

const initialState = {
    data: {
        message: null,
        isError: false,
        isFetching: false,
        isExecuted: false
    }
}

const carRequestSlice = createSlice({
    name: 'carRequest',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createCarRequest.pending, (state) => {
                state.data.message = null
                state.data.isError = false
                state.data.isFetching = true
                state.data.isExecuted = false
            })
            .addCase(createCarRequest.rejected, (state) => {
                state.data.message = 'Произошла ошибка. Попробуйте позже.'
                state.data.isError = true
                state.data.isFetching = false
                state.data.isExecuted = true
            })
            .addCase(createCarRequest.fulfilled, (state) => {
                state.data.message = 'Ваши контакты успешно отправлены и мы уже получили уведомление. Совсем скоро наш менеджер свяжется с вами.'
                state.data.isError = false
                state.data.isFetching = false
                state.data.isExecuted = true
            })
    }
})

export const {  } = carRequestSlice.actions
export default carRequestSlice.reducer