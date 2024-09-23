import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { useFIltration } from "modules/fitration"
import { useGetCatalogDataQuery } from "modules/catalog"

export const Container = ({}) => {

    const [ filters, isFiltersOn, setFiltrationParams ] = useFIltration()

    const { 
        data: catalogData, 
        error: catalogDataError, 
        isLoading: catalogDataIsLoading, 
        refetch: refetchCatalogData 
    } = useGetCatalogDataQuery({offset: 0, count: 100, filters: filters})

    useEffect(() => {
        refetchCatalogData({offset: 0, count: 100, filters: filters})
    }, [filters])

    console.log(catalogData)

    if(!catalogDataIsLoading) {
        return(
            <Layout
                catalogList={catalogData.response.ads}
                isFiltersOn={isFiltersOn}
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