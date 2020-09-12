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
        preparation: 1,
        work: 1,
        rest: 1,
        cycles: 2,
        sets: 2,
        longRest: 1,
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
        <AppContext.Provider value={{ setBg, setRunning }}>
            <AppStyled color={bg}>
                {running ? (
                    <>
                        <Working workout={workout} />
                    </>
                ) : (
                    <>
                        <Title text={'Tabata Timer'} color={bg} />
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
                    </>
                )}
            </AppStyled>
        </AppContext.Provider>
    )
}

export default App
