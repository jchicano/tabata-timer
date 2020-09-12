import React, { useEffect, useState, useContext } from 'react'

import { Clock } from '../Clock'
import { TimeControls } from '../TimeControls'

import { createWorkoutArray } from '../../utils/utils'
import { COLOR_TYPE } from '../../utils/constants'
import { Timer } from '../../utils/timer'
import { Title } from '../Titles'

import { AppContext } from '../../App'

import tick from '../../assets/sounds/tick.mp3'
import ding from '../../assets/sounds/ding.mp3'

export const Working = ({ workout, handleFinish }) => {
    const [time, setTime] = useState(workout.preparation)
    const [type, setType] = useState('prepare')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [workoutArray, setWorkoutArray] = useState([])
    const { setBg, setRunning } = useContext(AppContext)
    const [timerState, setTimerState] = useState(new Timer())

    //Crea el array del workout a partir del objeto workout de las props
    useEffect(() => {
        setWorkoutArray(createWorkoutArray(workout))
    }, [workout])

    useEffect(() => {
        const t = new Timer(() => {
            if (time > 0) {
                setTime(time - 1)
            } else {
                const newIndex = currentIndex + 1
                setCurrentIndex(newIndex)
            }
        }, 1000)

        setTimerState(t)
    }, [time])

    /* useEffect(() => {
        if (time === 0) {
        }

        if (time > 0 && time <= 3) {
            const audio = new Audio(tick)
            audio.play()
        } else if (time === 0) {
            setCurrentIndex(currentIndex + 1)

            if (type !== 'finish') {
                const audio = new Audio(ding)
                audio.play()
            }
        }
    }, [time, type]) */

    useEffect(() => {
        if (currentIndex >= 1) {
            if (currentIndex >= workoutArray.length) {
                setType('finish')
            } else {
                setTime(workoutArray[currentIndex].time)
                setType(workoutArray[currentIndex].type)
            }
        }
    }, [currentIndex, workoutArray])

    return (
        <>
            <Title text={'Aca va el titulo'} type={type} />
            <Clock time={time} type={type} />
            <TimeControls
                handlePause={() => {
                    timerState.pause()
                }}
                isPause={false}
                handleResume={() => {
                    timerState.resume()
                }}
                handleStop={() => {
                    setRunning(false)
                    setBg('#fff')
                }}
                handleRestart={() => {
                    timerState.pause()
                    setTime(workoutArray[0].time)
                    setCurrentIndex(0)
                    setType('prepare')
                }}
            />
        </>
    )
}
