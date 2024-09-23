import React from "react"
import { MainForm } from 'shared/forms'
import style from './Layout.module.sass'
import { InputText } from "shared/fields"
import { MainBtn } from "shared/buttons"

export const Layout = ({ onSubmit }) => {
    return(
        <MainForm onSubmit={onSubmit}>
            <InputText
                label={'Тестовое поле'}
                id={1}
                name={1}
                />
            <InputText
                label={'Тестовое поле 2'}
                id={2}
                name={2}
                />
            <MainBtn type={'submit'}>
                Отправить
            </MainBtn>
        </MainForm>
    )
}