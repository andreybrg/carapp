import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMainModal, unsetMainModal } from "../mainModal"

export const ModalsContext = React.createContext()

export const ModalsProvider = ({ children }) => {
    
    const dispatch = useDispatch()

    const [ mainModalComponent, setMainModalComponent ] = useState(null)
    const mainModalData = useSelector(store => store.mainModal)
    const { isMounted: mainModalIsMounted, title: mainModalTitle } = mainModalData

    const mainModalController = {
        modal: {
            component: mainModalComponent,
            isMounted: mainModalIsMounted,
            title: mainModalTitle
        },
        mountMainModal(Component, title) {
            setMainModalComponent(Component)
            dispatch(setMainModal({title}))
        },
        unmountMainModal() {
            setMainModalComponent(null)
            dispatch(unsetMainModal())
        }
    }


    return(
        <ModalsContext.Provider value={{mainModalController}}>
            {children}
        </ModalsContext.Provider>
    )
}