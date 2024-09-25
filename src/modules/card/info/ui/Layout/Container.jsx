import React from "react"
import { Layout } from "./Layout"

export const Container = ({ 
    dataContent,
    dataComplectation,
}) => {
    return(
        <Layout dataContent={dataContent} dataComplectation={dataComplectation}/>
    )
}