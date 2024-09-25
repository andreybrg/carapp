import { useEffect, useState } from "react"

export const useOnImageLoaded = (useEffectdepsArray=[]) => {
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
    }, useEffectdepsArray)

    const onImageLoaded = () => {
        setIsLoaded(true)
    }

    return [ isLoaded, onImageLoaded ]

}