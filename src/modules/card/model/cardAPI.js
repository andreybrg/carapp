import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardAPI = createApi({
    reducerPath: 'cardAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sivkovdemo.ru/catalogapi/' }),
    endpoints: (builder) => ({
        // Получить данные карточки
        getCardData: builder.query({
            query: () => `app/get/data`,
        }),
    }),
})

export const { 
    useGetCardDataQuery,
} = cardAPI