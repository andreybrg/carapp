import React from "react"
import { MainBtn } from "shared/buttons"
import { CustomRadioBtn, InputNumber } from "shared/fields"
import { MainFormColumnSection, MainForm, MainFormMessage } from "shared/forms"

export const Layout = ({
    onSubmit,
    formik,
    formState,
    closeModal
}) => {
    console.log(formState)
    return(
        <MainForm onSubmit={onSubmit}>
            {formState.isExecuted
            ?
            <>
                <MainFormMessage isSuccess={!formState.isError} isError={formState.isError}>
                    {formState.message}
                </MainFormMessage>
                <MainBtn onClick={() => closeModal()} type={'button'}>
                    Спасибо
                </MainBtn>
            </>
            :
            <>
                <MainFormColumnSection>
                    <CustomRadioBtn
                        label={'Telegram'}
                        id={'telegram'}
                        name={'connMethod'}
                        value={1}
                        onChangeFunction={formik.handleChange}
                        checkedFormik={formik.values.connMethod === "1"}
                    />
                    <CustomRadioBtn
                        label={'WhatsApp'}
                        id={'whatsapp'}
                        name={'connMethod'}
                        value={2}
                        onChangeFunction={formik.handleChange}
                        checkedFormik={formik.values.connMethod === "2"}
                    />
                    <CustomRadioBtn
                        label={'Звонок'}
                        id={'call'}
                        name={'connMethod'}
                        value={3}
                        onChangeFunction={formik.handleChange}
                        checkedFormik={formik.values.connMethod === "3"}
                    />
                </MainFormColumnSection>
                <InputNumber
                    label={'Ваш номер'}
                    id={'phone'}
                    name={'phone'}
                    formikTouched={formik.touched.phone}
                    formikErrors={formik.errors.phone}
                    formikFieldProps={{...formik.getFieldProps('phone')}}
                    />
                <MainBtn disabled={formState.isFetching} type={'submit'}>
                    Продолжить
                </MainBtn>
            </>
            }
        </MainForm>
    )
}