import React from "react"
import style from './ThirdBtn.module.sass'

export const ThirdBtn = ({ children, ...attributes }) => {
    return(
        <button {...attributes} className={style.btn}>
            <span>{children}</span>
        </button>
    )
}