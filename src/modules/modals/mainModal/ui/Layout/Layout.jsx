import React from "react"
import style from './Layout.module.sass'
import closeSvg from 'assets/images/close.svg'

export const Layout = ({
    children,
    closeModal,
    modalTitle
}) => {

    return(
        <div className={style.modal} onClick={(event) => closeModal(event)}>
            <div className={style.topSpacer}></div>
            <div className={style.container} data-modal='main-modal-content'>
                <div className={style.header}>
                    <div className={style.headerTitle}>{modalTitle}</div>
                    <button onClick={(event) => closeModal(event, true)} className={style.headerClose}>
                        <img src={closeSvg} alt=''/>
                    </button>
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}