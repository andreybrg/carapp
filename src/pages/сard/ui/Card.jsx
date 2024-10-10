import React, { useEffect } from "react"
import { CardModule } from "modules/card"
import { useProgressbar } from "modules/progressbar"

export const Card = () => {

    const [ startProgressBar ] = useProgressbar()

    useEffect(() => {
        startProgressBar()
    }, [])

    return(
        <CardModule/>
    )
}