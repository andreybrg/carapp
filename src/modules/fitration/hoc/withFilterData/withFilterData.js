import React from "react"
import { useSearchParams } from "react-router-dom"

export const withFilterData = (Component) => (props) => {

    const [ searchParams, setSearchParams ] = useSearchParams()

    const filterParams = {}
    const paramPriceFrom = searchParams.get('priceFrom')
    const paramPriceTo = searchParams.get('priceTo')
    if(searchParams.get('priceFrom')) filterParams.priceFrom = paramPriceFrom
    if(searchParams.get('priceTo')) filterParams.priceTo = paramPriceTo

    return(
        <Component
            {...props}
            filterParams={filterParams}
            isFiltersActive={!!Object.keys(filterParams).length}
            />
    )
}
