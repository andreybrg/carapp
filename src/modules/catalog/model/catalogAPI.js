import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogAPI = createApi({
    reducerPath: 'catalogAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sivkovdemo.ru/catalogapi/' }),
    endpoints: (builder) => ({
        // Получить данные каталога
        getCatalogData: builder.query({
            // query: ({offset, count, filters}) => `catalog/get/all?offset=${offset}&count=${count}${ filters.priceFrom ? `&priceFrom=${filters.priceFrom}` : '' }${ filters.priceTo ? `&priceTo=${filters.priceTo}` : '' }`,
            query: ({offset, count, filters}) => `catalog/get/allupdated?offset=1&count=100`,
        }),
    }),
})

export const { 
    useGetCatalogDataQuery,
} = catalogAPI