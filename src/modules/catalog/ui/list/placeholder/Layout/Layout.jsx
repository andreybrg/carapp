import React from "react"
import style from './Layout.module.sass'

export const Layout = () => {
    return(
        <div className={style.list}>
            <div className={style.item}>
                <div className={style.rect}></div>
                <div className={style.price}></div>
                <div className={style.title}></div>
            </div>
            <div className={style.item}>
                <div className={style.rect}></div>
                <div className={style.price}></div>
                <div className={style.title}></div>
            </div>
            <div className={style.item}>
                <div className={style.rect}></div>
                <div className={style.price}></div>
                <div className={style.title}></div>
            </div>
            <div className={style.item}>
                <div className={style.rect}></div>
                <div className={style.price}></div>
                <div className={style.title}></div>
            </div>
        </div>
    )
}