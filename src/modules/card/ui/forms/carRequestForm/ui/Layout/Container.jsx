import React, { useContext } from "react"
import { useFormik } from "formik"
import { ModalsContext } from "modules/modals"
import * as Yup from 'yup'
import { Layout } from "./Layout"
import { createCarRequest } from './../../model'
import { useDispatch, useSelector } from "react-redux"

export const Container = ({ advertId }) => {

    const dispatch = useDispatch()
    const { mainModalController } = useContext(ModalsContext)
    const formState = useSelector(store => store.carRequest.data)

    const formik = useFormik({
        initialValues: {
            phone: '',
            connMethod: '',
            advertId
        },
        validationSchema: Yup.object({
            phone: Yup.number()
                .required('Введите ваш номер')
                .integer(),
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(createCarRequest(values))

        }
    })

    return(
        <Layout
            onSubmit={formik.handleSubmit}
            formik={formik}
            formState={formState}
            />
    )
}