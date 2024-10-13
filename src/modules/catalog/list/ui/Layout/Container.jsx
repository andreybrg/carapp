import React, { useEffect, useState } from "react"
import { Layout } from "./Layout"
import { useGetCatalogDataQuery } from "./../../../model/catalogAPI"
import { Placeholder } from "../Placeholder/Placeholder"
import { MainError } from "shared/errorMessages"
import { useProgressbar } from "modules/progressbar"
import { CATALOG_REQUEST_SIZE } from "shared/utils"
import { usePagination } from "modules/pagination"

export const Container = ({ filterParams }) => {

    const [ adList, setAdList ] = useState([])

    const [ doPagination, currentPage ] = usePagination()
    const [ _, addProgressBarVal, setProgressbarDone, cancelProgressbarFlows ] = useProgressbar()

    const { 
        data: catalogData, 
        error: catalogDataError, 
        isLoading: catalogDataIsLoading, 
        refetch: refetchCatalogData,
        isFetching: catalogDataIsFetching
    } = useGetCatalogDataQuery({page: currentPage, count: CATALOG_REQUEST_SIZE, filters: filterParams})

    useEffect(() => {
        refetchCatalogData({page: currentPage, count: CATALOG_REQUEST_SIZE, filters: filterParams})
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

    useEffect(() => {
        if(catalogData) {
            setAdList(prev =>
                [
                    ...prev,
                    ...catalogData.response.ads
                ])
        }
    }, [catalogData])

    const onPaginate = () => {
        doPagination()
    }
    

    if(!catalogDataIsLoading) {
        return(
            !catalogDataError && adList
            ?
            <Layout
                data={adList}
                onPaginate={onPaginate}
                isDataFetching={catalogDataIsFetching}
                isDataLoading={catalogDataIsLoading}
                isRangeShown={adList.length === catalogData.response.totalCount ? true : false}
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