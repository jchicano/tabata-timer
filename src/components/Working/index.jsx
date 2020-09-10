import React, { useEffect, useState, useContext } from 'react'

import { Clock } from '../Clock'
import { TimeControls } from '../TimeControls'

import { arrayFromNumber } from '../../utils/utils'
import { COLOR_TYPE } from '../../utils/colors'
import { Timer } from '../../utils/timer'

import { AppContext } from '../../App'

export const Working = ({ workout, handleFinish }) => {
    const [time, setTime] = useState(workout.preparation)
    const [isPause, setIsPause] = useState(false)
    const [type, setType] = useState('prepare')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [workoutArray, setWorkoutArray] = useState([])
    const { setBg } = useContext(AppContext)
    const [timerState, setTimerState] = useState(new Timer())

    const timer = () => {
        const t = new Timer(() => {
            if (time > 0) {
                setTime(time - 1)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }, 1000)

        setTimerState(t)
    }

    useEffect(() => {})

    const createWorkoutArray = () => {
        const fakeArray = [
            {
                type: 'prepare',
                time: workout.preparation,
            },
        ]

        arrayFromNumber(workout.cycles).forEach((cycle, indexCycle) => {
            arrayFromNumber(workout.sets).forEach((set, indexSet) => {
                if (workout.work > 0) {
                    const work = {
                        type: 'work',
                        time: workout.work,
                    }
                    fakeArray.push(work)
                }

                if (workout.rest > 0 && indexSet < workout.sets - 1) {
                    const rest = {
                        type: 'rest',
                        time: workout.rest,
                    }

                    fakeArray.push(rest)
                }

                if (workout.longRest > 0 && indexSet === workout.sets - 1) {
                    if (indexCycle < workout.cycles - 1) {
                        const longRest = {
                            type: 'longRest',
                            time: workout.rest,
                        }

                        fakeArray.push(longRest)
                    }
                }
            })
        })

        setWorkoutArray(fakeArray)
    }

    const togglePause = () => {
        if (isPause) {
            setIsPause(false)
        } else {
            setIsPause(true)
        }
    }

    useEffect(createWorkoutArray, [])

    useEffect(timer, [time])

    useEffect(() => {
        console.log(isPause)
        if (isPause) {
            timerState.pause()
        } else {
            timerState.resume()
        }
    }, [isPause, timerState])

    useEffect(() => {
        if (currentIndex >= 1) {
            console.log(currentIndex)
            console.log(workoutArray.length - 1)
            console.log(workoutArray)
            if (currentIndex >= workoutArray.length - 1) {
                setType('finish')
                alert('Rutina terminada')
            } else {
                setTime(workoutArray[currentIndex].time)
                setType(workoutArray[currentIndex].type)
            }
        }
    }, [currentIndex, workoutArray])

    useEffect(() => {
        setBg(COLOR_TYPE[type])
    }, [type, setBg])

    return (
        <>
            <Clock time={time} type={type} />
            <TimeControls
                handleStop={togglePause}
                isPause={isPause}
                handleResume={togglePause}
            />
        </>
    )
}
