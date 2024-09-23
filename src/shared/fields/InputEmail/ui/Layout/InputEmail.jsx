import React from "react"
import style from './InputEmail.module.sass'

export const InputEmail = ({ 
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
                type={'email'}
                />
            {formikTouched && formikErrors ? <div className="main-form__field-error">{formikErrors}</div> : null}
        </label>
    )
}