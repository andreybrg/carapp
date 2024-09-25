import React from "react"
import style from './Price.module.sass'
import { priceFormatter } from "shared/utils"

export const Price = ({ price }) => {

    return(
        <div className={style.price}>
            {priceFormatter(price)}
        </div>
    )
}