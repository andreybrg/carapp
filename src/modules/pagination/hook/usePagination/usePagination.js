import { useState } from "react"
import { CATALOG_REQUEST_SIZE } from "shared/utils"

export const usePagination = () => {

    const [ currentOffset, setCurrentOffset ] = useState(0)

    const onPaginate = () => {
        setCurrentOffset(prev => prev+CATALOG_REQUEST_SIZE)
    }

    return [ onPaginate, currentOffset ]
}