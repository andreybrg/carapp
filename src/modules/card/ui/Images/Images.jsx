import React from "react"
import cn from 'classnames'
import style from './Images.module.sass'
import { useOnImageLoaded, usePicturesSlider } from "shared/hooks"
import arrowLeftSvg from 'assets/images/arrow_left.svg'
import arrowRightSvg from 'assets/images/arrow_right.svg'
import noPhotoSvg from 'assets/images/no_photo.svg'
import { IMAGES_STORAGE_URL } from "shared/utils"

export const Images = ({ images }) => {

    const [ currentSlide, sliderToLeft, sliderToRight ] = usePicturesSlider(images.length)
    const [ isImageLoaded, onImageLoaded ] = useOnImageLoaded([currentSlide])

    return(
        <div className={style.cardImages}>
            <div className={
                cn([
                    style.cardImages__img, 
                    {[style.cardImages__imgLoaded]: isImageLoaded}
                ])
            }>
            {
                images.length
                ?
                <>
                    <img onLoad={onImageLoaded} src={`${IMAGES_STORAGE_URL}${images[currentSlide].path}`} alt="" />
                    <img onLoad={onImageLoaded} src={`${IMAGES_STORAGE_URL}${images[currentSlide].path}`} alt="" />
                </>
                : 
                <img className={style.emptyPhoto} src={noPhotoSvg} alt="" />
            }
            </div>
            {
                images.length > 1
                    ? (<div className={style.cardImages__controls}>
                        <button onClick={() => sliderToLeft()}>
                            <img src={arrowLeftSvg} alt="" />
                        </button>
                        <button onClick={() => sliderToRight()}>
                            <img src={arrowRightSvg} alt="" />
                        </button>
                    </div>)
                    : null
            }
        </div>
    )
}