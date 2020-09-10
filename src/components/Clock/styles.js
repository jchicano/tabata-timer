import styled from 'styled-components'
import { darken } from 'polished'

export const ClockStyled = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;

    border: 10px solid
        ${props => (props.color ? darken('-0.1', props.color) : 'transparent')};
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 5rem;
    color: ${props => (props.color ? props.color : '#3268a8')};
`
