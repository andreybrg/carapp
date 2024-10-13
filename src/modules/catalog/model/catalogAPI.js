import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils'

export const catalogAPI = createApi({
    reducerPath: 'catalogAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные каталога
        getCatalogData: builder.query({
            query: ({page, count, filters}) => ({
                url: `catalog/get/allupdated?page=${page}&count=${count}${ filters.priceFrom ? `&priceFrom=${filters.priceFrom}` : '' }${ filters.priceTo ? `&priceTo=${filters.priceTo}` : '' }`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        }),
    }),
})

export const { 
    useGetCatalogDataQuery,
} = catalogAPI