import React from 'react'

import { TitleStyled, SubtitleStyled } from './styles'

export const Title = ({ text }) => {
    return <TitleStyled>{text}</TitleStyled>
}

export const Subtitle = ({ text }) => {
    return <SubtitleStyled>{text}</SubtitleStyled>
}
