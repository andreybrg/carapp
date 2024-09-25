import React, { useContext } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "../../context"

export const Container = () => {

    const modalsContextData = useContext(ModalsContext)

    const mainModal = modalsContextData.mainModalController

    return(
        <Layout
            mainModal={mainModal}
            />
    )
}