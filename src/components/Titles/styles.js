import styled from 'styled-components'
import { darken } from 'polished'

export const TitleStyled = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
    padding: 0.5em 1em;
    margin: 2rem 0;
    color: ${({ color }) => color && darken('-0.1', color)};
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: 8px solid ${({ bg }) => (bg ? darken('-0.1', bg) : 'transparent')};
    border-radius: 1em;
`

export const SubtitleStyled = styled.h3`
    font-size: 2rem;
    line-height: 2rem;
    color: ${({ color }) => (color ? color : 'black')};
`

export const WorkoutTitleStyled = styled.div`
    height: 40px;
    background-color: ${props => (props.color ? props.color : 'blue')};
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 1.2rem;
        line-height: 1.2rem;
        text-align: center;

        color: #fff;
    }

    i {
        color: #fff;
        font-size: 20px;
        margin: 0 8px;
    }
`
