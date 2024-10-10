import React from "react"
import { CatalogListItem } from "./../../item"
import style from './Layout.module.sass'
import { EmptyList } from "shared/emtyList"
import { Pagination } from "modules/pagination"

export const Layout = ({ 
    data, 
    onPaginate,
    isDataFetching,
    isDataLoading
}) => {

    return(
        <>
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
            {
                !isDataLoading
                ?
                <Pagination disabled={isDataFetching} onPaginate={onPaginate}/>
                :
                null
            }
        </>
    )
}