import React from "react"
import { CatalogListItem } from "../item"

import style from './Layout.module.sass'
import { EmptyList } from "shared/emtyList"

export const Layout = ({ data }) => {

    return(
        <div className={style.list}>
            {data.length
                ?
                data.map(el =>
                    <CatalogListItem key={el.content.advertId} data={el}/>
                )
                :
                <EmptyList/>
            }
        </div>
    )
}