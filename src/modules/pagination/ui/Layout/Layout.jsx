import React from "react"
import style from './Layout.module.sass'
import { ReactComponent as MoreSvg} from 'assets/images/arrow_down.svg'

export const Layout = ({ onPaginate, disabled, isRangeShown=false }) => {

    if(!isRangeShown) {
        return(
            <button disabled={disabled} onClick={() => onPaginate()} className={style.button}>
                <MoreSvg/>
                <span>Показать ещё</span>
            </button>
        )
    } else {
        return(<></>)
    }
}