import React from "react"
import style from './Complectation.module.sass'
import { numberFormatter } from "shared/utils"

export const Complectation = ({ data=[] }) => {

    return(
        data.length
        ?
        <div className={style.data}>
            <div className={style.title}>Состав комплектации</div>
            <ul className={style.list}>
                {data.map((el, key) =>
                    <li key={key} className={style.item}>
                        <span>{el}</span>
                    </li>
                )}
            </ul>
            
        </div>
        :
        null
    )
}