import React from "react"
import cn from 'classnames'
import noPhotoSvg from 'assets/images/no_photo.svg'
import style from './Picture.module.sass'
import { useOnImageLoaded } from "shared/hooks"
import { IMAGES_STORAGE_URL } from "shared/utils"

export const Picture = ({ images, mainImageId }) => {

    const [ isImageLoaded, onImageLoaded ] = useOnImageLoaded()
    
    const imagePath = images.find(img => img.id === mainImageId).path

    return(
        <div className={cn(
                style.picture,
                {[style.pictureLoaded]: isImageLoaded}
            )}>
            {
                mainImageId
                    ?
                    <>
                        <img onLoad={onImageLoaded} src={IMAGES_STORAGE_URL+imagePath} />
                        <img onLoad={onImageLoaded} src={IMAGES_STORAGE_URL+imagePath} />
                    </>
                    : <img className={style.emptyPhoto} src={noPhotoSvg} alt="" />
            }
        </div>
    )
}