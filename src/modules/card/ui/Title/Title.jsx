import React from "react"
import style from './Title.module.sass'

export const Title = ({ title }) => {
    return(
        <div className={style.title}>
            {title}
        </div>
    )
}