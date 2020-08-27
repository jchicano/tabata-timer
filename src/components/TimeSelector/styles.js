import styled from 'styled-components'

export const TimeSelectorStyled = styled.div`
    width: 100%;
    height: 80px;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    /* background-color: ${props => (props.color ? props.color : 'blue')}; */
    border: 3px solid ${props => (props.color ? props.color : 'blue')};

    .selector-type {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;

        span {
            font-size: 1.5rem;
        }
    }

    .selector-time {
        height: 100%;
        display: grid;
        justify-content: flex-end;

        input {
            width: 100px;
            height: 100%;
            padding: 0.2rem 0.5rem;

            font-size: 2rem;

            text-align: right;
        }
    }
`

export const Icon = styled.i`
    font-size: 50px;
    color: ${props => (props.color ? props.color : 'blue')};
`
