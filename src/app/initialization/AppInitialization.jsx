import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { appInitialization } from "app"


export const AppInitialization = ({ children }) => {

    const dispatch = useDispatch()
    const isAppInitialized = useSelector(store => store.app.data.isInit)

    useEffect(() => {
        dispatch(appInitialization())
    }, [])

    if(isAppInitialized) {
        return(
            children
        )
    } else {
        return(
            <>LOADING</>
        )
    }
}