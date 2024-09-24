import React from "react"
import { Layout } from "./Layout"
import { useParams } from "react-router-dom"
import { useGetCardDataQuery } from "modules/card/model/cardAPI"
import { CardPlaceholder } from "../placeholder"
import { MainError } from "shared/errorMessages"

export const Container = ({}) => {

    const { cardId } = useParams()

    const { 
        data: cardData, 
        error: cardDataError, 
        isLoading: cardDataIsLoading, 
        refetch: refetchCardData,
        isFetching: cardDataIsFetching
    } = useGetCardDataQuery({id: cardId}) 
    
    if(!cardDataIsFetching) {
        return(
            !cardDataError
            ?
            <Layout 
                cardId={cardId}
                cardData={cardData.response[0]}
                />
            :
            <MainError message={'Ошибка загрузки. Попробуйте позже.'}/>
        )
    } else {
        return(
            <CardPlaceholder/>
        )
    }
}