import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils'

export const catalogAPI = createApi({
    reducerPath: 'catalogAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные каталога
        getCatalogData: builder.query({
            query: ({offset, count, filters}) => `catalog/get/allupdated?offset=${offset}&count=${count}${ filters.priceFrom ? `&priceFrom=${filters.priceFrom}` : '' }${ filters.priceTo ? `&priceTo=${filters.priceTo}` : '' }`,
        }),
    }),
})

export const { 
    useGetCatalogDataQuery,
} = catalogAPI