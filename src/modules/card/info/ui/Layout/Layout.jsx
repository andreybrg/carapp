import React from "react"
import style from './Layout.module.sass'
import { Characteristics } from "../Characteristics/Characteristics"
import { Complectation } from "../Complectation/Complectation"

export const Layout = ({ 
    dataContent,
    dataComplectation,
}) => {
    return(
        <div className={style.info}>
            <Characteristics data={dataContent}/>
            <Complectation data={dataComplectation}/>
        </div>
    )
}