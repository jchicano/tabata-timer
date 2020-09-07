import styled from 'styled-components'

export const TitleStyled = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
    margin: 2rem 0;
`

export const SubtitleStyled = styled.h3`
    font-size: 2rem;
    line-height: 2rem;
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
