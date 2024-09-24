import React from "react"
import style from './SecondBtn.module.sass'

export const SecondBtn = ({ children, ...attributes }) => {
    return(
        <button {...attributes} className={style.btn}>
            <span>{children}</span>
        </button>
    )
}