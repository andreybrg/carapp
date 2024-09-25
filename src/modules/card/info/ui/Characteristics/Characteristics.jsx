import React from "react"
import style from './Characteristics.module.sass'
import { numberFormatter } from "shared/utils"

export const Characteristics = ({ data }) => {

    const carData = []
    
    if(data.year) carData.push(['Год', data.year])
    if(data.complectation) carData.push(['Комплектация', data.complectation])
    if(data.drive) carData.push(['Привод', data.drive])
    if(data.engineСapacity) carData.push(['Объём, л.', data.engineСapacity])
    if(data.fuelType) carData.push(['Топливо', data.fuelType])
    if(data.horsePower) carData.push(['Мощность, л.с.', numberFormatter(data.horsePower)])
    if(data.mileage) carData.push(['Пробег, км.', numberFormatter(data.mileage)])
    if(data.ownersCount) carData.push(['Владельцев', data.ownersCount])
    if(data.transmission) carData.push(['Трансмиссия', data.transmission])

    return(
        carData.length
        ?
        <div className={style.data}>
            <div className={style.title}>Характеристики</div>
            {carData.map((el, key) =>
                <div key={key} className={style.item}>
                    <span>{el[0]}</span>
                    <span>{el[1]}</span>
                </div>
            )}
        </div>
        :
        null
    )
}