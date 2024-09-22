import React from "react"
import { CatalogListItem } from "../item"
import style from './Layout.module.sass'

export const Layout = ({ data }) => {

    return(
        <div className={style.list}>
            {
                data.map(el =>
                    <CatalogListItem key={el.content.advertId} data={el}/>
                )
            }
        </div>
    )
}