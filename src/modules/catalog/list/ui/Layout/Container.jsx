import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { useGetCatalogDataQuery } from "./../../../model/catalogAPI"
import { Placeholder } from "../Placeholder/Placeholder"
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

    if(!catalogDataIsFetching) {
        return(
            !catalogDataError && catalogData
            ?
            <Layout
                data={catalogData.response.ads}
                />
            :
            <MainError message={'Ошибка загрузки. Попробуйте позже.'}/>
        )
    } else {
        return(
            <Placeholder/>
        )
    }
}