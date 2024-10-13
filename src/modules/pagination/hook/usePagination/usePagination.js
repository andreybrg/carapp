import { useState } from "react"

export const usePagination = () => {

    const [ currentPage, setCurrentPage ] = useState(1)

    const onPaginate = () => {
        setCurrentPage(prev => prev+1)
    }

    return [ onPaginate, currentPage ]
}