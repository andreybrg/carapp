import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { Placeholder } from "../Placeholder/Placeholder"
import { MainError } from "shared/errorMessages"
import { useProgressbar } from "modules/progressbar"
import { usePagination } from "modules/pagination"
import { useSelector } from "react-redux"

export const Container = ({ filterParams }) => {

    const catalogStore = useSelector(store => store.catalog.data)

    const [ doPagination ] = usePagination(filterParams)
    const [ _, addProgressBarVal, setProgressbarDone, cancelProgressbarFlows ] = useProgressbar()

    useEffect(() => {
        if(catalogStore.isInit) {
            addProgressBarVal(0.3)
            setProgressbarDone()
        }
        return () => {
            cancelProgressbarFlows()
        }
    }, [catalogStore.isInit])

    const onPaginate = () => {
        doPagination()
    }

    if(catalogStore.isInit) {
        return(
            !catalogStore.isError
            ?
            <Layout
                data={catalogStore.adList}
                onPaginate={onPaginate}
                isDataFetching={catalogStore.isFetching}
                isDataLoading={!catalogStore.isInit}
                isRangeShown={catalogStore.adList.length === catalogStore.totalCount ? true : false}
                />
            :
            <MainError message={'Ошибка загрузки. Попробуйте позже.'}/>
        )
    } else {
        return(
            <Placeholder/>
        )
    }
}