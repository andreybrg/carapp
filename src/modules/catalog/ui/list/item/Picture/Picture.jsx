import React from "react"
import noPhotoSvg from 'assets/images/no_photo.svg'
import style from './Picture.module.sass'

export const Picture = ({ images, mainImageId }) => {
    return(
        <div className={style.picture}>
            {
                mainImageId
                    ? <img src={'https://sivkovdemo.ru/catalogapi/storage/images/'+(images.find(img => img.id === mainImageId)).path} />
                    : <img className={style.emptyPhoto} src={noPhotoSvg} alt="" />
            }
        </div>
    )
}