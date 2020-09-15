import React, { useEffect, useState, useContext } from 'react'

import { Clock } from '../Clock'
import { TimeControls } from '../TimeControl'
import { Title } from '../Titles'
import { WorkoutSequence } from '../WorkoutSequence'
import { WorkingContainer } from './styles'

import { AppContext } from '../../App'

import tick from '../../assets/sounds/tick.mp3'
import ding from '../../assets/sounds/ding.mp3'

import { Timer } from '../../utils/timer'
import { COLOR_TYPE, TEXTS } from '../../utils/constants'
import { getTotalTimeFromWorkoutArray } from '../../utils/utils'

export const Working = ({ workout }) => {
    const [time, setTime] = useState(workout.preparation)
    const [type, setType] = useState('preparation')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [timerState, setTimerState] = useState(new Timer())
    const [currentSet, setCurrentSet] = useState(1)
    const [currentCycle, setCurrentCycle] = useState(1)
    const [timeRemaining, setTimeRemainig] = useState(
        getTotalTimeFromWorkoutArray(workout || [])
    )

    const { setBg, setRunning, workout: workoutObject } = useContext(AppContext)

    //timer
    useEffect(() => {
        const t = new Timer(() => {
            if (time > 1) {
                setTime(time - 1)
            }

            if (time === 1) {
                setCurrentIndex(prevIndex => prevIndex + 1)
            }

            if (timeRemaining > 0) {
                setTimeRemainig(prev => prev - 1)
            }
        }, 1000)

        setTimerState(t)

        return () => t.stop()
    }, [time, workout, currentIndex, timeRemaining])

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

    //pasar al siguiente elemento del workout
    useEffect(() => {
        setTime(workout[currentIndex]?.time)
        setType(workout[currentIndex]?.type)
    }, [currentIndex, workout])

    /*funciones para los controlers de tiempo*/
    const restartWorkout = () => {
        timerState.pause()
        setTime(workout[0].time)
        setCurrentIndex(0)
        setType('preparation')
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

    /* control de la aecuencia */
    const updateSetsAndCycles = () => {
        if (workout[currentIndex - 1]) {
            const workoutIten = workout[currentIndex - 1]

            if (workoutIten.type === 'rest') {
                setCurrentSet(prevSet => prevSet + 1)
            } else if (workoutIten.type === 'longRest') {
                setCurrentSet(1)
                setCurrentCycle(prevCycle => prevCycle + 1)
            }
        }
    }

    useEffect(updateSetsAndCycles, [currentIndex])

    useEffect(() => {
        setTimeRemainig(getTotalTimeFromWorkoutArray(workout))
    }, [workout])

    return (
        <WorkingContainer>
            <div>
                <Title text={String(TEXTS[type]).toUpperCase()} type={type} />
                <Clock time={time} type={type} />
                <TimeControls
                    handlePause={pauseWorkout}
                    handleResume={resumeWorkout}
                    handleStop={stopWorkout}
                    handleRestart={restartWorkout}
                />
            </div>

            <WorkoutSequence
                workoutArray={workout}
                currentIndex={currentIndex}
                currentType={workout[currentIndex].type}
                sets={currentSet}
                totalSets={workoutObject.sets}
                cycles={currentCycle}
                totalCycles={workoutObject.cycles}
                remaining={timeRemaining}
            />
        </WorkingContainer>
    )
}
