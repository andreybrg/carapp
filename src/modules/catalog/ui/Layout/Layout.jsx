import React from "react"
import { CatalogList } from "../list"
import { CatalogControls } from "../controls"

export const Layout = ({ catalogList=[], isFiltersOn }) => {

    return(
        <>
            <CatalogControls
                isFiltersOn={isFiltersOn}
                />
            <CatalogList
                data={catalogList}
                />
        </>
    )
}