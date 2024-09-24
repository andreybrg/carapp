import React from "react"
import style from './InputPassword.module.sass'

export const InputPassword = ({ 
    label,
    id,
    name,
    formikFieldProps={},
    formikTouched=false,
    formikErrors=null,
}) => {


    return(
        <label htmlFor={id || name} className={style.label}>
            <div className={style.title}>{label}</div>
            <input 
                {...formikFieldProps}
                placeholder={''} 
                type={'password'}
                />
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>
    )
}