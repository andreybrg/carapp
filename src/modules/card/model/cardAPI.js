import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils'

export const cardAPI = createApi({
    reducerPath: 'cardAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные карточки
        getCardData: builder.query({
            query: ({id}) => ({
                url: `catalog/get/itemupdated/${id}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        }),
    }),
})

export const { 
    useGetCardDataQuery,
} = cardAPI