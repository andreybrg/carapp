import React from "react"
import tuneSvg from 'assets/images/tune.svg'
import style from './Layout.module.sass'
import cn from "classnames"

export const Layout = ({ isFiltersActive, openFilters }) => {

    return(
        <button onClick={() => openFilters()} className={style.item}>
            <img src={tuneSvg}/>
            <span>Фильтры</span>
            {
                isFiltersActive
                    ? <div className={cn({[style.active]:isFiltersActive})}></div>
                    : null
            }
        </button>
    )
}