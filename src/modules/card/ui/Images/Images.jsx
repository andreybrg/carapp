import React, { useEffect, useState } from "react"
import cn from 'classnames'
import style from './Images.module.sass'
import { usePicturesSlider } from "shared/hooks"
import arrowLeftSvg from 'assets/images/arrow_left.svg'
import arrowRightSvg from 'assets/images/arrow_right.svg'
import noPhotoSvg from 'assets/images/no_photo.svg'

export const Images = ({ images }) => {

    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ currentSlide, sliderToLeft, sliderToRight ] = usePicturesSlider(images.length)

    useEffect(() => {
        setIsLoaded(false)
    }, [currentSlide])

    const onImgLoaded = () => {
        setIsLoaded(true)
    }

    return(
        <div className={style.cardImages}>
            <div className={
                cn([
                    style.cardImages__img, 
                    {[style.cardImages__imgLoaded]: isLoaded}
                ])
            }>
            {
                images.length
                ?
                <>
                    <img onLoad={onImgLoaded} src={`https://sivkovdemo.ru/catalogapi/storage/images/${images[currentSlide].path}`} alt="" />
                    <img className={style.bgImage} onLoad={onImgLoaded} src={`https://sivkovdemo.ru/catalogapi/storage/images/${images[currentSlide].path}`} alt="" />
                </>
                : 
                <img onLoad={onImgLoaded} className={style.emptyPhoto} src={noPhotoSvg} alt="" />
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