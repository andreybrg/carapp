import React from "react"
import { CatalogList } from "../list"
import { CatalogControls } from "../controls"

export const Layout = ({ 
    filterParams,
    isFiltersActive,
}) => {

    return(
        <>
            <CatalogControls
                isFiltersActive={isFiltersActive}
                />
            <CatalogList
                filterParams={filterParams}
                />
        </>
    )
}