import React from "react"
import { Images } from "../Images/Images"
import { Price } from "../Price/Price"
import { Title } from "../Title/Title"
import { CardInfo } from "../../info"
import { priceFormatter } from "shared/utils"
import style from './Layout.module.sass'
import { BackBtn, MainBtn, SecondBtn } from "shared/buttons"

export const Layout = ({ 
    cardId,
    cardData,
    openCarRequestForm
}) => {

    const title = `${cardData.content.manufacturer} ${cardData.content.model}`

    return(
        <>
            <BackBtn />
            <article className={style.card}>
                <Images images={cardData.images}/>
                <Price price={priceFormatter(cardData.content.price)}/>
                <Title title={title}/>
                <div className={style.btnSection}>
                    <MainBtn onClick={() => openCarRequestForm()}>
                        Хочу эту машину
                    </MainBtn>
                    <div className={style.btnsInRow}>
                        <SecondBtn>
                            Позвонить
                        </SecondBtn>
                        <SecondBtn>
                            Написать
                        </SecondBtn>
                    </div>
                </div>
                <CardInfo 
                    dataContent={cardData.content} 
                    dataComplectation={[
                        'Розетка 12V',
                        'Антиблокировочная система (ABS)',
                        'Подушка безопасности водителя',
                        'Аудиосистема',
                    ]}
                    />
            </article>
        </>
    )
}