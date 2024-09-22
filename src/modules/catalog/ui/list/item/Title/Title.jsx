import React from 'react'
import style from './Title.module.sass'

export const Title = ({ data }) => {

    const manufacturer = data.manufacturer
    const model = data.model
    const year = data.year
    const fuelType = data.fuelType
    const horsePower = data.horsePower
    const engineСapacity = data.engineСapacity
    const transmission = data.transmission

    return(
        <div className={style.title}>
            {manufacturer} {model} ({year} г. {fuelType} {horsePower} л.с. {engineСapacity} л. {transmission})
        </div>
    )
}