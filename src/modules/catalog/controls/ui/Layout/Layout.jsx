import React from "react"
import style from './Layout.module.sass'
import { FiltersControl } from "../../filters"

export const Layout = ({ isFiltersActive }) => {
    return(
        <div className={style.controls}>
            <div  className={style.item}>
                <FiltersControl
                    isFiltersActive={isFiltersActive}
                    />
            </div>
        </div>
    )
}