import React from "react"
import style from './Characteristics.module.sass'

export const Characteristics = ({ data }) => {

    data = [
        ['Год', '2015'],
        ['Комплектация', 'Elegance'],
        ['Привод', 'Передний'],
        ['Объём, л.', '1.4'],
        ['Топливо', 'Бензин'],
        ['Мощность, л.с.', '107'],
        ['Пробег, км.', '153000'],
        ['Владельцев', '4'],
        ['Трансмиссия', 'AT']
    ]
    


    return(
        <div className={style.list}>
            {data.map(el =>
                <div className={style.item}>
                    <span>{el[0]}</span>
                    <span>{el[1]}</span>
                </div>
            )}
        </div>
    )
}