import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils'

export const carRequestAPI = createApi({
    reducerPath: 'carRequestAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные карточки
        createCarRequest: builder.mutation({
            query: (data) => {
                return({
                    url: `requests/post/create`,
                    method: 'POST',
                    body: data,
                    formData: true
                })
            }
        }),
    }),
})

export const { 
    useCreateCarRequestMutation,
} = carRequestAPI