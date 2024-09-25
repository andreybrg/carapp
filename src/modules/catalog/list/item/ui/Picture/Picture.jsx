import React from "react"
import cn from 'classnames'
import noPhotoSvg from 'assets/images/no_photo.svg'
import style from './Picture.module.sass'
import { useOnImageLoaded } from "shared/hooks"

export const Picture = ({ images, mainImageId }) => {

    const [ isImageLoaded, onImageLoaded ] = useOnImageLoaded()

    return(
        <div className={cn(
                style.picture,
                {[style.pictureLoaded]: isImageLoaded}
            )}>
            {
                mainImageId
                    ? <img onLoad={onImageLoaded} src={'https://sivkovdemo.ru/catalogapi/storage/images/'+(images.find(img => img.id === mainImageId)).path} />
                    : <img className={style.emptyPhoto} src={noPhotoSvg} alt="" />
            }
        </div>
    )
}