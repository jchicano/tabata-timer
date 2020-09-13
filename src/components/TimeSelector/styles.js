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
        grid-column-gap: 24px;
        align-items: center;

        span {
            font-size: 1.5rem;
        }
    }

    .selector-time {
        height: 100%;

        display: flex;
        justify-content: flex-end;

        input {
            width: 100%;
            height: 100%;
            padding: 0.5rem 1rem;

            font-size: 28px;
            line-height: 28px;

            border: none;
            border-radius: 6px;
            background: rgba(255, 255, 255, 1);

            text-align: center;
        }
    }
`

export const Icon = styled.i`
    font-size: 50px;
    color: #fff;
`
