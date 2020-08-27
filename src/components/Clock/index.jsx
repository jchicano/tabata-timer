import React, { useState, useEffect } from 'react'

import { ClockStyled } from './styles'

export const Clock = ({ time, color }) => {
    const [timeState, setTimeState] = useState(time)

    const timer = () => {
        setTimeout(() => {
            if (timeState > 0) {
                setTimeState(timeState - 1)
            }
        }, 1000)
    }

    useEffect(timer, [timeState])

    return (
        <ClockStyled color={color}>
            <h1>{timeState}</h1>
        </ClockStyled>
    )
}
