import React, { useEffect, useState } from 'react'

import { WorkoutItem } from '../WorkoutItem'
import { Subtitle } from '../Titles'
import { StartButton } from '../Buttons'

import { TotalWorkoutStyled, Workout, TotalTime } from './styles'

import { secondsToMinutes } from '../../utils/utils'

export const TotalWorkout = ({ workout = [], handleStart }) => {
    const [totalTime, setTotalTime] = useState(0)

    useEffect(() => {
        if (workout.length > 0) {
            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue

            const arrayOFtimes = workout.map(x => x.time)
            setTotalTime(arrayOFtimes.reduce(reducer))
        }
    }, [workout])

    return (
        <TotalWorkoutStyled>
            <TotalTime>
                <Subtitle text={'Rutina'} />
                <span> {secondsToMinutes(totalTime)} </span>
            </TotalTime>

            <Workout>
                {workout.map((item, i) => {
                    return (
                        <WorkoutItem
                            type={item.type}
                            time={item.time}
                            key={i}
                        />
                    )
                })}
            </Workout>
            <StartButton handleClick={handleStart} text={'¡Comenzar!'} />
        </TotalWorkoutStyled>
    )
}
