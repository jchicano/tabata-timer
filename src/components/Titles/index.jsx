import React from 'react'

import { TitleStyled, SubtitleStyled, WorkoutTitleStyled } from './styles'
import { ICONS } from '../../utils/icons'

export const Title = ({ text }) => {
    return <TitleStyled>{text}</TitleStyled>
}

export const Subtitle = ({ text }) => {
    return <SubtitleStyled>{text}</SubtitleStyled>
}

export const WorkoutTitle = ({ text, type = null, color }) => {
    return (
        <WorkoutTitleStyled color={color}>
            <i className={ICONS[type]}></i>
            <h3>{text}</h3>
        </WorkoutTitleStyled>
    )
}
