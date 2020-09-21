import { darken } from 'polished'
import styled from 'styled-components'

export const ClockStyled = styled.div`
    width: 400px;
    height: 400px;
    @media (max-width: 576px) {
        width: 80vw;
        height: 80vw;
    }
    margin: 2rem auto;

    border: 10px solid
        ${props => (props.color ? darken('-0.1', props.color) : 'transparent')};
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    /* font-size: 150px; */
    font-size: 100vw !important;
    color: ${props => (props.color ? props.color : '#3268a8')};
`
