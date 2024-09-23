import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { useSelector } from "react-redux"
import { useGetCatalogDataQuery } from "modules/catalog/model/catalogAPI"

export const Container = ({ filterParams }) => {

    const { 
        data: catalogData, 
        error: catalogDataError, 
        isLoading: catalogDataIsLoading, 
        refetch: refetchCatalogData,
        isFetching: catalogDataIsFetching
    } = useGetCatalogDataQuery({offset: 0, count: 100, filters: filterParams})

    useEffect(() => {
        refetchCatalogData({offset: 0, count: 100, filters: filterParams})
    }, [filterParams])

    console.log(catalogData)

    if(!catalogDataIsFetching) {
        return(
            <Layout
                data={catalogData.response.ads}
                />
        )
    } else {
        return(
            <>
                LOADING
            </>
        )
    }
}