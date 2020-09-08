import React, { useState } from 'react'
import styled from 'styled-components'

import { Title } from './components/Titles'
import { WorkoutCreator } from './components/WorkoutCreator'
import { TotalWorkout } from './components/TotalWorkout'
import { Working } from './components/Working'

const AppStyled = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Poppins', sans-serif;
`

const Division = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;

    align-items: flex-start;
`

function App() {
    const [running, setRunning] = useState(false)
    const [workout, setWorkout] = useState({
        preparation: 15,
        work: 0,
        rest: 0,
        cycles: 1,
        sets: 1,
        longRest: 0,
    })

    const handleInputs = e => {
        setWorkout({
            ...workout,
            [e.target.name]: Number(e.target.value) || 0,
        })
    }

    const startWorkout = () => {
        /* if (workout.work <= 0 || workout.cycles <= 0 || workout.sets <= 0) {
            alert('Ingrese tiempos validos')
            return
        } */

        setRunning(true)
    }

    return (
        <AppStyled>
            <Title text={'Tabata Timer'} />

            {running ? (
                <Working workout={workout} />
            ) : (
                <Division>
                    <WorkoutCreator
                        handleInputs={handleInputs}
                        workout={workout}
                    />
                    <TotalWorkout
                        workout={workout}
                        handleStart={startWorkout}
                    />
                </Division>
            )}
        </AppStyled>
    )
}

export default App
