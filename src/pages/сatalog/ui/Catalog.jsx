import React, { useEffect } from "react"
import { CatalogModule } from "modules/catalog"
import { useProgressbar } from "modules/progressbar"

export const Catalog = () => {

    const [ startProgressBar ] = useProgressbar()

    useEffect(() => {
        startProgressBar()
    }, [])

    return(
        <CatalogModule/>
    )
}