import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useFIltration = () => {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ fitersData, setFiltersData ] = useState({})
    const [ isFiltersOn, setIsFiltersOn ] = useState(false)

    useEffect(() => {
        const filterParams = {}
        const paramPriceFrom = searchParams.get('priceFrom')
        const paramPriceTo = searchParams.get('priceTo')
        if(searchParams.get('priceFrom')) filterParams.priceFrom = paramPriceFrom
        if(searchParams.get('priceTo')) filterParams.priceTo = paramPriceTo
        setFiltersData(filterParams)
        setIsFiltersOn(!!Object.keys(filterParams).length)
    }, [])

    // Если фильтры устанавливаются из компоненты
    const setFiltration = (filters) => {
        const filterParams = {}
        if(filters.priceFrom) filterParams.priceFrom = filters.priceFrom
        if(filters.priceTo) filterParams.priceTo = filters.priceTo
        setSearchParams(filterParams)
        setFiltersData(filterParams)
        setIsFiltersOn(!!Object.keys(filterParams).length)
    }

    return [ fitersData, isFiltersOn, setFiltration ]
}