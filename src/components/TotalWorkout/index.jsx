import React from 'react'
import { arrayFromNumber } from '../../utils/utils'

import { WorkoutItem } from '../WorkoutItem'
import { Subtitle, WorkoutTitle } from '../Titles'
import { StartButton } from '../Buttons'

import { TotalWorkoutStyled, Workout } from './styles'

export const TotalWorkout = ({ workout = null, handleStart }) => {
    return (
        <TotalWorkoutStyled>
            <Subtitle text={'Rutina'} />

            <Workout>
                {workout?.preparation > 0 && (
                    <div>
                        <WorkoutItem
                            text="Preparación"
                            time={workout.preparation}
                            type="prepare"
                        />
                    </div>
                )}

                {arrayFromNumber(workout?.cycles).map((cycle, index) => {
                    return (
                        <div key={`cycle_${index}`}>
                            {arrayFromNumber(workout.sets).map((set, i) => {
                                return (
                                    <div key={`set_${i}`}>
                                        <WorkoutItem
                                            text="Ejercicio"
                                            time={workout.work}
                                            type="work"
                                        />

                                        {i === workout.sets - 1 ? (
                                            index + 1 < workout.cycles ? (
                                                <WorkoutItem
                                                    text="Descanso largo"
                                                    time={workout.longRest}
                                                    type="longRest"
                                                />
                                            ) : (
                                                <WorkoutTitle
                                                    text={'¡Fin!'}
                                                    type="finish"
                                                />
                                            )
                                        ) : (
                                            <WorkoutItem
                                                text="Descanso"
                                                time={workout.rest}
                                                type="rest"
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </Workout>
            <StartButton handleClick={handleStart} text={'¡Comenzar!'} />
        </TotalWorkoutStyled>
    )
}
