import React from "react"
import { Layout } from "./Layout"

export const Container = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }
    return(
        <Layout
            onSubmit={onSubmit}
            />
    )
}