import React from 'react'
import styled from 'styled-components'

import { secondsToMinutes } from '../../utils/utils'
import { COLOR_TYPE } from '../../utils/constants'

const WorkoutItemStyled = styled.div`
    width: 100%;
    height: 80px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;

    border: 1px solid ${({ color }) => (color ? color : '')};
    background-color: ${({ color }) => (color ? color : '')};
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WorkoutItem = ({ text, time, type }) => {
    return (
        <WorkoutItemStyled color={COLOR_TYPE[type]}>
            <h5>{text}</h5>
            <span>{secondsToMinutes(time)}</span>
        </WorkoutItemStyled>
    )
}
