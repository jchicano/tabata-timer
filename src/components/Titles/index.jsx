import React from 'react'

import { TitleStyled, SubtitleStyled, WorkoutTitleStyled } from './styles'
import { ICONS, COLOR_TYPE } from '../../utils/constants'

export const Title = ({ text, type }) => {
    return <TitleStyled color={COLOR_TYPE[type]}>{text}</TitleStyled>
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
