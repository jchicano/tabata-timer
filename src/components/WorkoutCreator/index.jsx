import React from 'react'

import { TimeSelector } from '../TimeSelector'

import { Selectors } from './styles'

export const WorkoutCreator = ({ handleInputs, workout }) => {
    return (
        <Selectors>
            <TimeSelector
                type="prepare"
                handleChange={handleInputs}
                startValue={workout.preparation}
                name="preparation"
            />
            <TimeSelector
                type="work"
                handleChange={handleInputs}
                name="work"
                startValue={workout.work}
            />
            <TimeSelector
                type="rest"
                handleChange={handleInputs}
                name="rest"
                startValue={workout.rest}
            />
            <TimeSelector
                type="sets"
                handleChange={handleInputs}
                startValue={workout.sets}
                name="sets"
            />
            <TimeSelector
                type="longRest"
                handleChange={handleInputs}
                name="longRest"
                startValue={workout.longRest}
            />
            <TimeSelector
                type="cycles"
                handleChange={handleInputs}
                startValue={workout.cycles}
                name="cycles"
            />
        </Selectors>
    )
}
