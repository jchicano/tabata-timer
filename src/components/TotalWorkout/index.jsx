import React, { useEffect } from 'react'
import { arrayFromNumber } from '../../utils'

import { WorkoutItem } from '../WorkoutItem'
import { Subtitle } from '../Titles'
import { StartButton } from '../Buttons'

import { TotalWorkoutStyled, Workout } from './styles'

export const TotalWorkout = ({ workout = null, handleStart }) => {
    useEffect(() => {
        console.log(workout)
    }, [workout])

    return (
        <TotalWorkoutStyled>
            <Subtitle text={'Rutina'} />

            <Workout>
                {workout?.preparation > 0 && (
                    <div>
                        <WorkoutItem
                            text="Preparación"
                            time={workout.preparation}
                        />
                    </div>
                )}

                {arrayFromNumber(workout?.cycles).map((cycle, index) => {
                    return (
                        <div key={`cycle_${index}`}>
                            <Subtitle text={`Ronda ${index + 1}`} />

                            {arrayFromNumber(workout.sets).map((set, i) => {
                                return (
                                    <div key={`set_${i}`}>
                                        <WorkoutItem
                                            text="Ejercicio"
                                            time={workout.work}
                                        />

                                        {i === workout.sets - 1 ? (
                                            index + 1 < workout.cycles ? (
                                                <WorkoutItem
                                                    text="Descanso largo"
                                                    time={workout.longRest}
                                                />
                                            ) : (
                                                <Subtitle text={'¡Fin!'} />
                                            )
                                        ) : (
                                            <WorkoutItem
                                                text="Descanso"
                                                time={workout.rest}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

                <StartButton handleClick={handleStart} text={'¡Comenzar!'} />
            </Workout>
        </TotalWorkoutStyled>
    )
}
