import React, { useEffect, useState } from 'react'

import { Clock } from '../Clock'

import { arrayFromNumber } from '../../utils/utils'

export const Working = ({ workout, handleFinish }) => {
    const [time, setTime] = useState(workout.preparation)
    const [type, setType] = useState('prepare')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [workoutArray, setWorkoutArray] = useState([])

    const timer = () => {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
            } else if (time === 0) {
                setCurrentIndex(currentIndex + 1)
            }
        }, 1000)
    }

    const createWorkoutArray = () => {
        const fakeArray = [
            {
                type: 'prepare',
                time: workout.preparation,
            },
        ]

        arrayFromNumber(workout.cycles).forEach(cycle => {
            arrayFromNumber(workout.sets).forEach(set => {
                const work = {
                    type: 'work',
                    time: workout.work,
                }

                const rest = {
                    type: 'rest',
                    time: workout.rest,
                }

                fakeArray.push(work, rest)
            })
        })

        setWorkoutArray(fakeArray)
    }

    useEffect(createWorkoutArray, [])

    useEffect(timer, [time])

    useEffect(() => {
        if (currentIndex >= 1) {
            if (currentIndex === workoutArray.length - 1) {
                setType('finish')
            } else {
                setTime(workoutArray[currentIndex].time)
                setType(workoutArray[currentIndex].type)
            }
        }
    }, [currentIndex])

    return <Clock time={time} type={type} />
}
