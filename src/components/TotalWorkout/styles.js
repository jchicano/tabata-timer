import styled from 'styled-components'

export const TotalWorkoutStyled = styled.div`
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ffff;
    border-radius: 8px;
`

export const Workout = styled.div`
    width: 100%;
    height: 100%;
    max-height: 50vh;
    padding: 0 10px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 1.5rem 0;

    display: flex;
    flex-direction: column;

    background-color: #fff;

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #ccc;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #3268a8;
        border-radius: 6px;
    }

    :after {
        content: '';
        display: block;
        height: 2rem;
        width: 100%;
    }
`

export const TotalTime = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
    }
`
