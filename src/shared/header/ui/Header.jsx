import React from "react"
import style from './Header.module.sass'
import logoSvg from 'assets/images/logo.svg'

export const Header = ({  }) => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logoSvg} alt="" />
            </div>
        </div>
    )
}