import React from "react"
import { Layout } from "./Layout"

export const Container = ({ isFiltersActive }) => {
    return(
        <Layout
            isFiltersActive={isFiltersActive}
            />
    )
}