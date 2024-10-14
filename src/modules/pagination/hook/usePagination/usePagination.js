import { getPageData } from "modules/catalog"
import { resetPageData } from "modules/catalog"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const usePagination = (filterParams) => {

    const dispatch = useDispatch()
    const isCatalogInitiated = useSelector(store => store.catalog.data.isInit)

    // Инициализирующий первый запрос первой страницы каталога
    useEffect(() => {
        dispatch(getPageData({filterParams: filterParams, initialCall: true}))
    }, [])

    // Сброс данных и установка новых при изменении фильтров
    useEffect(() => {
        if(isCatalogInitiated) {
            dispatch(resetPageData({filterParams: filterParams}))
        }
    }, [filterParams])

    // Подгрузка следующей страницы при пагинации
    const onPaginate = () => {
        dispatch(getPageData({filterParams: filterParams, incrementPage: true}))
    }


    return [ onPaginate ]
}