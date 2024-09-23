import React from "react"
import { Layout } from "./Layout"
import { withFilterData } from "modules/fitration"

export const Container = ({}) => {

    const LayoutWithFilterData = withFilterData(Layout)

    return(
        <LayoutWithFilterData />
    )

}