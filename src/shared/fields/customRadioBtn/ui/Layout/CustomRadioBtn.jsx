import React from "react"
import style from './CustomRadioBtn.module.sass'

export const CustomRadioBtn = ({
    label,
    id,
    name,
    value,
    onChangeFunction,
    checkedFormik,
}) => {
    return(
        <label className={style.label} htmlFor={id}>
            <div className={style.title}>{label}</div>
            <input type="radio" name={name} id={id} value={value} placeholder=""
                onChange={onChangeFunction}
                checked={checkedFormik}
            />
        </label>
    )
}