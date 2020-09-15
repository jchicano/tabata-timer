import React, { useContext } from 'react'

import { TimeSelector } from '../TimeSelector'

import { Selectors } from './styles'

import { AppContext } from '../../App'

export const WorkoutCreator = () => {
    const { setWorkout, workout } = useContext(AppContext)

    const onChange = (name, value) => {
        setWorkout({
            ...workout,
            [name]: value,
        })
    }

    return (
        <Selectors>
            <TimeSelector
                type="preparation"
                startValue={workout.preparation}
                handleChange={onChange}
            />
            <TimeSelector
                type="work"
                startValue={workout.work}
                handleChange={onChange}
            />
            <TimeSelector
                type="rest"
                startValue={workout.rest}
                handleChange={onChange}
            />
            <TimeSelector
                type="sets"
                startValue={workout.sets}
                handleChange={onChange}
            />
            <TimeSelector
                type="longRest"
                startValue={workout.longRest}
                handleChange={onChange}
            />
            <TimeSelector
                type="cycles"
                startValue={workout.cycles}
                handleChange={onChange}
            />
        </Selectors>
    )
}
