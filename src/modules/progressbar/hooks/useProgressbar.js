import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { progressAdd, progressDone, progressStart, resetProgress } from "../model"

export const useProgressbar = () => {

    const dispatch = useDispatch()

    const addProgressBarVal = (value=0) => {
        dispatch(progressAdd(value))
    }

    const cancelableFlow = (f, timeout) => {
        let timerId = null
        const promice = new Promise((resolve, reject) =>
            timerId = setTimeout(() => resolve(f()), timeout)
        )
        
        return [ timerId, promice ]
    }

    let cancelablePromises = []

    const setProgressbarDone = () => {
        cancelablePromises.push(cancelableFlow(() => {
            dispatch(progressDone())
        }, 300))
        cancelablePromises.push(cancelableFlow(() => {
            dispatch(resetProgress())
        }, 900))

        Promise.all(cancelablePromises.map((promice) => promice[1]))
            .then(() => {
                // console.log('resolved')
                cancelFlows()
            })
    }

    const cancelFlows = () => {
        // console.log('cancelation', cancelablePromises)
        if(cancelablePromises[0]) cancelablePromises.forEach(([timerId]) => clearTimeout(timerId))
        cancelablePromises = []
    }

    const startProgressBar = () => {
        dispatch(resetProgress())
        setTimeout(() => {
            dispatch(progressStart())
        }, 1)
        setTimeout(() => {
            dispatch(progressAdd(0.15))
        }, 2)
    }

    return [ startProgressBar, addProgressBarVal, setProgressbarDone, cancelFlows ]
}