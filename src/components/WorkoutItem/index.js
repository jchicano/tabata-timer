import React from 'react'
import styled from 'styled-components'

import { secondsToMinutes } from '../../utils/utils'
import { COLOR_TYPE, TEXTS } from '../../utils/constants'

const WorkoutItemStyled = styled.div`
    width: 100%;
    min-height: 40px;
    height: 40px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;

    border: 1px solid ${({ color }) => (color ? color : '')};
    background-color: ${({ color }) => (color ? color : '')};
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WorkoutItem = ({ text = null, time, type }) => {
    return (
        <WorkoutItemStyled color={COLOR_TYPE[type]}>
            <h5>{text || TEXTS[type]}</h5>
            <span>{secondsToMinutes(time)}</span>
        </WorkoutItemStyled>
    )
}
