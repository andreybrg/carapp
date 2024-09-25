import { useSearchParams } from 'react-router-dom'

export const useFIltration = () => {
    
    const [ searchParams, setSearchParams ] = useSearchParams()
    
    const setFiltration = (filters) => {
        const filterParams = {}
        if(filters.priceFrom) filterParams.priceFrom = filters.priceFrom
        if(filters.priceTo) filterParams.priceTo = filters.priceTo
        setSearchParams(filterParams)
    }

    return [ setFiltration ]
}