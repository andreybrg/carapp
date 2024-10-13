import React from "react"
import style from './Header.module.sass'
import { ReactComponent as LogoSvg } from 'assets/images/logo.svg'
import { ReactComponent as CallSvg } from 'assets/images/call.svg'
import { ReactComponent as TelegramSvg } from 'assets/images/telegram.svg'
import { MAIN_PHONE_CONTACT, MAIN_TELEGRAM_CONTACT } from "shared/utils"

export const Header = ({  }) => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <LogoSvg/>
            </div>
            <div className={style.contacts}>
                <a href={`https://t.me/${MAIN_TELEGRAM_CONTACT}`} target={'_blank'} className={style.contactItem}>
                    <TelegramSvg/>
                </a>
                <a href={`tel:${MAIN_PHONE_CONTACT}`} className={style.contactItem}>
                    <CallSvg/>
                </a>
            </div>
        </div>
    )
}