import { Layout } from "./Layout"
import React from "react"

export const Container = ({ onPaginate, disabled, isRangeShown }) => {

    return(
        <Layout
            disabled={disabled}
            onPaginate={onPaginate}
            isRangeShown={isRangeShown}
            />
    )
}