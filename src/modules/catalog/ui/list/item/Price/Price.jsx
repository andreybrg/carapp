import React from "react"
import { usePriceFormatter } from 'shared/hooks'
import style from './Price.module.sass'

export const Price = ({ price }) => {

    const [ formatedPrice ] = usePriceFormatter(price)

    return(
        <div className={style.price}>
            {formatedPrice}
        </div>
    )
}