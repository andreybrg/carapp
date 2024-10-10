import React, { useEffect, useState } from "react"
import { Layout } from "./Layout"
import { useGetCatalogDataQuery } from "./../../../model/catalogAPI"
import { Placeholder } from "../Placeholder/Placeholder"
import { MainError } from "shared/errorMessages"
import { useProgressbar } from "modules/progressbar"
import { CATALOG_REQUEST_SIZE } from "shared/utils"
import { usePagination } from "modules/pagination"

export const Container = ({ filterParams }) => {

    const [ doPagination, currentOffset ] = usePagination()
    const [ _, addProgressBarVal, setProgressbarDone, cancelProgressbarFlows ] = useProgressbar()

    const { 
        data: catalogData, 
        error: catalogDataError, 
        isLoading: catalogDataIsLoading, 
        refetch: refetchCatalogData,
        isFetching: catalogDataIsFetching
    } = useGetCatalogDataQuery({offset: currentOffset, count: CATALOG_REQUEST_SIZE, filters: filterParams})

    useEffect(() => {
        refetchCatalogData({offset: currentOffset, count: CATALOG_REQUEST_SIZE, filters: filterParams})
    }, [filterParams])

    useEffect(() => {
        if(!catalogDataIsLoading) {
            addProgressBarVal(0.3)
            setProgressbarDone()
        }
        return () => {
            cancelProgressbarFlows()
        }
    }, [catalogDataIsLoading])

    const onPaginate = () => {
        doPagination()
        console.log('paginate')
    }

    if(!catalogDataIsLoading) {
        return(
            !catalogDataError && catalogData
            ?
            <Layout
                data={catalogData.response.ads}
                onPaginate={onPaginate}
                isDataFetching={catalogDataIsFetching}
                isDataLoading={catalogDataIsLoading}
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