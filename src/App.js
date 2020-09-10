import React, { useState } from 'react'

import { Title } from './components/Titles'
import { WorkoutCreator } from './components/WorkoutCreator'
import { TotalWorkout } from './components/TotalWorkout'
import { Working } from './components/Working'

import { AppStyled, Division } from './styles'

export const AppContext = React.createContext({})

function App() {
    const [bg, setBg] = useState('')
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
        <AppContext.Provider value={{ bg, setBg }}>
            <AppStyled background={bg}>
                <Title text={'Tabata Timer'} color={bg} />

                {running ? (
                    <>
                        <Working workout={workout} />
                    </>
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
        </AppContext.Provider>
    )
}

export default App
