import styled from 'styled-components'

export const StartButtonStyled = styled.button`
    width: 100%;
    max-width: 260px;
    min-height: 60px;
    height: 60px;
    padding: 0.2rem 0.5rem;
    margin: 0 auto;
    margin-top: auto;

    background: #32a852;
    border: 1px solid #32a852;
    border-radius: 6px;

    color: #fff;
    font-size: 1.2rem;

    cursor: pointer;

    :hover {
        background-color: #28b850;
        border-color: #28b850;
    }

    :active {
        background-color: #34c25b;
        border-color: #34c25b;
    }

    i {
        margin-left: 0.5rem;
    }
`
