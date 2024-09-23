import React from "react"
import style from './InputText.module.sass'

export const InputText = ({ 
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
                type={'text'}
                />
            {formikTouched && formikErrors ? <div className="main-form__field-error">{formikErrors}</div> : null}
        </label>
    )
}