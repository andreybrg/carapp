import React from "react"
import { MainModal } from "../../mainModal"
import'./Modals.sass'

export const Layout = ({ mainModal }) => {
    return(
        <div id='main-modal'>
                {mainModal.modal.isMounted && (
                    <MainModal modalTitle={mainModal.modal.title}>
                        {mainModal.modal.component}
                    </MainModal>
                )}
        </div>
    )
}