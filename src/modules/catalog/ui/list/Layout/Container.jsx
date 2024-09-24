import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { useGetCatalogDataQuery } from "modules/catalog/model/catalogAPI"
import { CatalogPlaceholder } from "../placeholder"
import { MainError } from "shared/errorMessages"

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
            !catalogDataError
            ?
            <Layout
                data={catalogData.response.ads}
                />
            :
            <MainError message={'Ошибка загрузки. Попробуйте позже.'}/>
        )
    } else {
        return(
            <CatalogPlaceholder/>
        )
    }
}