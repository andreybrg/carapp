import React from "react"
import style from './Layout.module.sass'
import { Outlet } from "react-router-dom"
import { Header } from "shared/header"
import { ModalsModule } from "modules/modals"
import { Progressbar } from "modules/progressbar"

export const Layout = ({
}) => {

    return(
        <div className={style.app}>
            <Progressbar/>
            <header className={style.header}>
                <div className={style.wrap}>
                    <div className={style.container}>
                        <Header/>
                    </div>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.wrap}>
                    <div className={style.container}>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <ModalsModule/>
        </div>
    )
}