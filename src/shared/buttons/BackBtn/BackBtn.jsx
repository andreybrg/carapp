import React from "react"
import { useNavigate } from "react-router-dom"
import arrow_back from 'assets/images/arrow_back.svg'
import styles from './BackBtn.module.sass'

export const BackBtn = ({ path=-1, text='Назад', onClickFunction }) => {

    const navigate = useNavigate()

    return(
        <button 
            className={styles.button} 
            type="button" 
            onClick={
                onClickFunction
                    ? () => onClickFunction()
                    : () => navigate(path)
            }>
            <img className={styles.image} src={arrow_back} alt="Назад" />
            <span className={styles.span}>{text}</span>
        </button>
    )
}