import { useState } from "react"

export const usePicturesSlider = (imagesLength) => {

    const [ currentSlide, setCurrentSlide] = useState(0)

    const sliderToLeft = () => {
        currentSlide === 0 ? setCurrentSlide(prev => imagesLength-1) : setCurrentSlide(prev => prev-1)
    }

    const sliderToRight = () => {
        currentSlide+1 > imagesLength-1 ? setCurrentSlide(prev => 0) : setCurrentSlide(prev => prev+1)
    }

    return [ currentSlide, sliderToLeft, sliderToRight ]
}