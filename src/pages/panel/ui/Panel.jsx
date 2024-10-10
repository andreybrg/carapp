import { PanelModule } from "modules/panel"
import { useProgressbar } from "modules/progressbar"
import React, { useEffect } from "react"

export const Panel = () => {

    const [ startProgressBar ] = useProgressbar()

    useEffect(() => {
        startProgressBar()
    }, [])


    return(
        <PanelModule/>
    )
}