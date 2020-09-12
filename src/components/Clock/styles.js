import styled from 'styled-components'
import { darken } from 'polished'

export const ClockStyled = styled.div`
    width: 400px;
    height: 400px;
    margin: 2rem auto;

    border: 10px solid
        ${props => (props.color ? darken('-0.1', props.color) : 'transparent')};
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 150px;
    color: ${props => (props.color ? props.color : '#3268a8')};
`
