import React from "react"
import cn from "classnames"
import style from './Layout.module.sass'
import { CatalogListItem } from "./../../item"
import { EmptyList } from "shared/emtyList"
import { Pagination } from "modules/pagination"

export const Layout = ({ 
    data, 
    onPaginate,
    isDataFetching,
    isDataLoading,
    isRangeShown
}) => {

    return(
        <>
            <div className={cn(
                    style.list,
                    {[style.listFetching]: isDataFetching}
                )}>
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
                <Pagination disabled={isDataFetching} onPaginate={onPaginate} isRangeShown={isRangeShown}/>
                :
                null
            }
        </>
    )
}