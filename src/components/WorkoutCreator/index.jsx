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
                color="#eb983f"
            />
            <TimeSelector
                type="work"
                handleChange={handleInputs}
                name="work"
                color="#32a852"
            />
            <TimeSelector type="rest" handleChange={handleInputs} name="rest" />
            <TimeSelector
                type="sets"
                handleChange={handleInputs}
                startValue={workout.sets}
                name="sets"
                color="#32a852"
            />
            <TimeSelector
                type="cycles"
                handleChange={handleInputs}
                startValue={workout.cycles}
                name="cycles"
                color="#32a852"
            />
            <TimeSelector
                type="longRest"
                handleChange={handleInputs}
                name="longRest"
                color="#69d6a0"
            />
        </Selectors>
    )
}
