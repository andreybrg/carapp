import React from "react"
import tuneSvg from 'assets/images/tune.svg'
import style from './Layout.module.sass'
import cn from "classnames"

export const Layout = ({ isFiltersOn }) => {

    return(
        <button onClick={() => {/*onFiltersOpen */}} className={style.item}>
            <img src={tuneSvg}/>
            <span>Фильтры</span>
            {
                isFiltersOn
                    ? <div className={cn({[style.active]:isFiltersOn})}></div>
                    : null
            }
        </button>
    )
}