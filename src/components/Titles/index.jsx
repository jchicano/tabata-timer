import React from 'react'

import { TitleStyled, SubtitleStyled, WorkoutTitleStyled } from './styles'
import { ICONS, COLOR_TYPE } from '../../utils/constants'

export const Title = ({ text, type }) => {
    const color = type ? COLOR_TYPE[type] : '#fff'
    const bg = type ? 'rgba(255, 255, 255, 0.5)' : 'transparent'
    const border = type ? COLOR_TYPE[type] : 'transparent'

    return (
        <TitleStyled color={color} bg={bg} border={border}>
            {text}
        </TitleStyled>
    )
}

export const Subtitle = ({ text }) => {
    return <SubtitleStyled>{text}</SubtitleStyled>
}

export const WorkoutTitle = ({ text, type }) => {
    return (
        <WorkoutTitleStyled color={COLOR_TYPE[type]}>
            <i className={ICONS[type]}></i>
            <h3>{text}</h3>
        </WorkoutTitleStyled>
    )
}
