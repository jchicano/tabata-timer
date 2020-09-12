import { darken, linearGradient } from 'polished'
import styled from 'styled-components'

export const AppStyled = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Poppins', sans-serif;

    background: ${props =>
        props.color
            ? linearGradient({
                  colorStops: [props.color, darken(0.2, props.color)],
                  toDirection: 'to bottom left',
                  fallback: '#fff',
              })
            : ''};
`

export const Division = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;

    align-items: flex-start;
`
