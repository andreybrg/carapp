import React, { useContext } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "modules/modals"
import { FiltrationForm } from "modules/fitration"

export const Container = ({ isFiltersActive }) => {

    const { mainModalController } = useContext(ModalsContext)

    const openFilters = () => {
        mainModalController.mountMainModal(<FiltrationForm/>, 'Фильтры')
    }

    return(
        <Layout
            openFilters={openFilters}
            isFiltersActive={isFiltersActive}
            />
    )
}