import { MainModal } from "modules/modals/mainModal"
import { createPortal } from "react-dom"

export const useMountMainModal = () => {

    const doMount = (children) => {
        const domNodeElement = document.getElementById('main-modal')
        createPortal(
            <MainModal>{children}</MainModal>,
            domNodeElement
        )
    }

    return [ doMount ]
}