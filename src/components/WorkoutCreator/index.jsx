import React, { useContext } from 'react'

import { TimeSelector } from '../TimeSelector'

import { Selectors } from './styles'

import { AppContext } from '../../App'

export const WorkoutCreator = () => {
    const { workout } = useContext(AppContext)

    return (
        <Selectors>
            <TimeSelector
                type="prepare"
                startValue={workout.preparation}
                name="preparation"
            />
            <TimeSelector type="work" name="work" startValue={workout.work} />
            <TimeSelector type="rest" name="rest" startValue={workout.rest} />
            <TimeSelector type="sets" startValue={workout.sets} name="sets" />
            <TimeSelector
                type="longRest"
                name="longRest"
                startValue={workout.longRest}
            />
            <TimeSelector
                type="cycles"
                startValue={workout.cycles}
                name="cycles"
            />
        </Selectors>
    )
}
