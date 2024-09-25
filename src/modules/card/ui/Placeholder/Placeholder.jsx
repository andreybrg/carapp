import React from "react"
import style from './Placeholder.module.sass'

export const Placeholder = () => {
    return(
        <div className={style.item}>
            <div className={style.rect}></div>
            <div className={style.price}></div>
            <div className={style.title}></div>
        </div>
    )
}