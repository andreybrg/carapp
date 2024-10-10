import React from "react"
import style from './Layout.module.sass'
import { useSelector } from "react-redux"

export const Layout = () => {

    const bar = useSelector(store => store.progressbar.data)
    
    if(bar.isInit) {
        return(
            <div className={style.progressbar}>
                <div className={style.bar}
                    style={{width: `${bar.progress*100}%`}}
                ></div>
            </div>
        )
    } else {
        return(<></>)
    }
}