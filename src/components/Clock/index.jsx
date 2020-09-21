import { COLOR_TYPE } from '../../utils/constants'
import { ClockStyled } from './styles'
import React from 'react'

export const Clock = ({ time, type }) => {
    return (
        <ClockStyled color={COLOR_TYPE[type]}>
            <span style={{ fontSize: '10rem' }}>{time}</span>
            {/* Temporary fix on style */}
        </ClockStyled>
    )
}
