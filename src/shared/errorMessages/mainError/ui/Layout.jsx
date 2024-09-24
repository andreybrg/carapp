import React from "react"
import style from './Layout.module.sass'

export const Layout = ({ message }) => {
    return(
        <div className={style.error}>
            <span>🤯</span>
            <span>{message}</span>
        </div>
    )
}