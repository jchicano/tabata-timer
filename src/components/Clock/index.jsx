import React from 'react'

import { ClockStyled } from './styles'

import { COLOR_TYPE } from '../../utils/colors'

export const Clock = ({ time, type }) => {
    return (
        <ClockStyled color={COLOR_TYPE[type]}>
            <h1>{time}</h1>
        </ClockStyled>
    )
}
