import React from "react"
import { Layout } from "./Layout"

export const Container = ({ children }) => {
    return(
        <Layout>
            {children}
        </Layout>
    )
}