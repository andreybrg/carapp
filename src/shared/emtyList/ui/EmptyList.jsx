import React from "react"
import style from './EmptyList.module.sass'
import emptyListSvg from 'assets/images/frame_inspect.svg'

export const EmptyList = ({  }) => {
    return(
        <div className={style.item}>
            <img src={emptyListSvg} alt="" />
            <span>Ничего не найдено</span>
        </div>
    )
}