import React, { useContext } from "react"
import { Layout } from "./Layout"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useFIltration, withFilterData } from "modules/fitration"
import { ModalsContext } from "modules/modals"


const Container = ({ filterParams }) => {
    
    const { mainModalController } = useContext(ModalsContext)

    const [ setFiltration ] = useFIltration()

    const formik = useFormik({
        initialValues: {
            priceFrom: filterParams.priceFrom ? filterParams.priceFrom : '',
            priceTo: filterParams.priceTo ? filterParams.priceTo : '',
        },
        validationSchema: Yup.object({
            priceFrom: Yup.number()
                .integer()
                .positive(),
            priceTo: Yup.number()
                .integer()
                .positive()
        }),
        onSubmit: (values) => {
            setFiltration(values)
            mainModalController.unmountMainModal()
        }
    })

    return(
        <Layout
            onSubmit={formik.handleSubmit}
            formik={formik}
            />
    )
}

export const ContainerWithFilterData = () => {
    const ContainerWithFilterData = withFilterData(Container)
    return <ContainerWithFilterData/>
}