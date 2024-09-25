import React, { useContext } from "react"
import { Layout } from "./Layout"
import { useParams } from "react-router-dom"
import { useGetCardDataQuery } from "./../../model/cardAPI"
import { Placeholder } from "./../Placeholder/Placeholder"
import { MainError } from "shared/errorMessages"
import { ModalsContext } from "modules/modals"
import { CarRequestForm } from "../../forms"

export const Container = ({}) => {

    const { cardId } = useParams()
    const { mainModalController } = useContext(ModalsContext)

    const openCarRequestForm = () => {
        mainModalController.mountMainModal(<CarRequestForm advertId={cardId}/>, 'Оставьте ваши контакты и мы свяжемся с вами')
    }

    const { 
        data: cardData, 
        error: cardDataError, 
        isLoading: cardDataIsLoading, 
        refetch: refetchCardData,
        isFetching: cardDataIsFetching
    } = useGetCardDataQuery({id: cardId}) 

    if(!cardDataIsFetching) {
        return(
            !cardDataError && cardData
            ?
            <Layout 
                cardId={cardId}
                cardData={cardData.response[0]}
                openCarRequestForm={openCarRequestForm}
                />
            :
            <MainError message={'Ошибка загрузки. Попробуйте позже.'}/>
        )
    } else {
        return(
            <Placeholder/>
        )
    }
}