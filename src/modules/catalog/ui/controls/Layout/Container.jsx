import React from "react"
import { Layout } from "./Layout"

export const Container = ({ isFiltersOn }) => {
    return(
        <Layout
            isFiltersOn={isFiltersOn}
            />
    )
}