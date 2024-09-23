import React from "react"
import { MainForm } from 'shared/forms'
import { InputNumber } from "shared/fields"
import { MainBtn } from "shared/buttons"
import style from './Layout.module.sass'

export const Layout = ({ onSubmit, formik }) => {
    return(
        <MainForm onSubmit={onSubmit}>
            <InputNumber
                label={'Цена от'}
                id={'priceFrom'}
                name={'priceFrom'}
                formikFieldProps={{...formik.getFieldProps('priceFrom')}}
                />
            <InputNumber
                label={'Цена до'}
                id={'priceTo'}
                name={'priceTo'}
                formikFieldProps={{...formik.getFieldProps('priceTo')}}
                />
            <MainBtn type={'submit'}>
                Отправить
            </MainBtn>
        </MainForm>
    )
}