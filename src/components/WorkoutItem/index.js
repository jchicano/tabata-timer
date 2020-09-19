import { COLOR_TYPE, TEXTS } from '../../utils/constants'

import React from 'react'
import { secondsToMinutes } from '../../utils/utils'
import styled from 'styled-components'

const WorkoutItemStyled = styled.div`
    width: 100%;
    min-height: 50px;
    height: 50px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;

    border: 1px solid ${({ color }) => (color ? color : '')};
    background-color: ${({ color }) => (color ? color : '')};
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px;
`

export const WorkoutItem = ({ text = null, time, type }) => {
    return (
        <WorkoutItemStyled color={COLOR_TYPE[type]}>
            <h5 style={{ marginBottom: 0 }}>{text || TEXTS[type]}</h5>{' '}
            {/* Temporary fix on style */}
            <span>{time > 0 ? secondsToMinutes(time) : '--:--'}</span>
        </WorkoutItemStyled>
    )
}
