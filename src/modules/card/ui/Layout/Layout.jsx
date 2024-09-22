import React from "react"
import { Images } from "../Images/Images"
import { Price } from "../Price/Price"
import { Title } from "../Title/Title"
import { CardInfo } from "../info"

import style from './Layout.module.sass'
import { BackBtn, MainBtn } from "shared/buttons"

export const Layout = ({ 
    cardId,
}) => {
    return(
        <>
            <BackBtn />
            <article className={style.card}>
                <Images />
                <Price price={25000000}/>
                <Title title={'Заголовок'}/>
                <CardInfo />
                <MainBtn>
                    Хочу эту машину
                </MainBtn>
            </article>
        </>
    )
}