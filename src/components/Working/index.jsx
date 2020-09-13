import React, { useEffect, useState, useContext } from 'react'

import { Clock } from '../Clock'
import { TimeControls } from '../TimeControls'

import { createWorkoutArray } from '../../utils/utils'
import { COLOR_TYPE, TEXTS } from '../../utils/constants'
import { Timer } from '../../utils/timer'
import { Title } from '../Titles'

import { AppContext } from '../../App'

import tick from '../../assets/sounds/tick.mp3'
import ding from '../../assets/sounds/ding.mp3'

export const Working = ({ workout }) => {
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

    //timer
    useEffect(() => {
        const t = new Timer(() => {
            console.log('time', time)
            if (time > 1) {
                setTime(time - 1)
            }

            if (time === 1) {
                setCurrentIndex(prevIndex => prevIndex + 1)
            }
        }, 1000)

        setTimerState(t)

        return () => t.stop()
    }, [time, workoutArray, currentIndex])

    //audios
    useEffect(() => {
        if (time > 1 && time <= 5) {
            const audio = new Audio(tick)
            audio.play()
        } else if (time === 1) {
            const audio = new Audio(ding)
            audio.play()
        }
    }, [time, type])

    //bagkground
    useEffect(() => {
        setBg(COLOR_TYPE[type])
    }, [type, setBg])

    //pasar al siguiente elemento del workoutArray
    useEffect(() => {
        console.log('index', currentIndex)
        console.log('item', workoutArray[currentIndex])
        if (currentIndex > 0) {
            setTime(workoutArray[currentIndex]?.time)
            setType(workoutArray[currentIndex]?.type)
        }
    }, [currentIndex, workoutArray])

    const restartWorkout = () => {
        timerState.pause()
        setTime(workoutArray[0].time)
        setCurrentIndex(0)
        setType('prepare')
    }

    const stopWorkout = () => {
        setBg(COLOR_TYPE['initial'])
        setRunning(false)
    }

    const resumeWorkout = () => {
        timerState.resume()
    }

    const pauseWorkout = () => {
        timerState.pause()
    }

    return (
        <>
            <Title text={String(TEXTS[type]).toUpperCase()} type={type} />
            <Clock time={time} type={type} />
            <TimeControls
                handlePause={pauseWorkout}
                handleResume={resumeWorkout}
                handleStop={stopWorkout}
                handleRestart={restartWorkout}
            />
        </>
    )
}
