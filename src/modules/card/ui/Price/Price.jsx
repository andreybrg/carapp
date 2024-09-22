import React from "react"
import style from './Price.module.sass'

export const Price = ({ price }) => {
    return(
        <div className={style.price}>
            {price}
        </div>
    )
}