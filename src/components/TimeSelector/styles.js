import styled from 'styled-components'

export const TimeSelectorStyled = styled.div`
    width: 100%;
    padding: 1rem;

    display: grid;
    grid-template-columns: 80% 1fr;

    background-color: ${props => (props.color ? props.color : '')};
    border: 3px solid ${props => (props.color ? props.color : '')};
    border-radius: 6px;

    color: #fff;

    .selector-type {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 10% 1fr;
        align-items: center;

        span {
            font-size: 1.5rem;

            i {
                margin-right: 16px;
            }
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

            border: none;
            border-radius: 6px;
        }
    }
`

export const Icon = styled.i`
    font-size: 50px;
    color: #fff;
`
