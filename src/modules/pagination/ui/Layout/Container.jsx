import { usePagination } from "modules/pagination/hook"
import { Layout } from "./Layout"
import React from "react"

export const Container = ({ onPaginate, disabled }) => {

    return(
        <Layout
            disabled={disabled}
            onPaginate={onPaginate}
            />
    )
}