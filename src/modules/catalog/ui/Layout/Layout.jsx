import React from "react"
import { CatalogList } from "../list"
import { CatalogControls } from "../controls"
import style from './Layout.module.sass'

export const Layout = ({ 
    filterParams,
    isFiltersActive,
}) => {

    return(
        <div className={style.catalog}>
            <CatalogControls
                isFiltersActive={isFiltersActive}
                />
            <CatalogList
                filterParams={filterParams}
                />
        </div>
    )
}