import React, { useContext } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "modules/modals"

export const Container = ({ isFiltersOn }) => {

    const { mainModalController } = useContext(ModalsContext)

    const openFilters = () => {
        mainModalController.mountMainModal(<>Привет черт</>, 'Фильтры')
    }

    return(
        <Layout
            openFilters={openFilters}
            isFiltersOn={isFiltersOn}
            />
    )
}