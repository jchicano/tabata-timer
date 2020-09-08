import styled from 'styled-components'

export const ClockStyled = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;

    border: 10px solid ${props => (props.color ? props.color : '#3268a8')};
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 5rem;
    color: ${props => (props.color ? props.color : '#3268a8')};
`
