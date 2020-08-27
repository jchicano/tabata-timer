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
            <TimeSelector type="work" handleChange={handleInputs} name="work" />
            <TimeSelector type="rest" handleChange={handleInputs} name="rest" />
            <TimeSelector
                type="sets"
                handleChange={handleInputs}
                startValue={workout.sets}
                name="sets"
            />
            <TimeSelector
                type="cycles"
                handleChange={handleInputs}
                startValue={workout.cycles}
                name="cycles"
            />
            <TimeSelector
                type="longRest"
                handleChange={handleInputs}
                name="longRest"
            />
        </Selectors>
    )
}
