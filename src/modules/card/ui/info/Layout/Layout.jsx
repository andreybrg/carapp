import React from "react"
import style from './Layout.module.sass'
import { Characteristics } from "../Characteristics/Characteristics"

export const Layout = ({ 
}) => {
    return(
        <div className={style.info}>
            <Characteristics />
        </div>
    )
}