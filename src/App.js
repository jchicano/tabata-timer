import React, { useEffect, useState } from 'react'

import { Title } from './components/Titles'
import { WorkoutCreator } from './components/WorkoutCreator'
import { TotalWorkout } from './components/TotalWorkout'
import { Working } from './components/Working'

import { COLOR_TYPE } from './utils/constants'

import { AppStyled, Division } from './styles'
import { createWorkoutArray } from './utils/utils'

export const AppContext = React.createContext({})

function App() {
    const [bg, setBg] = useState(COLOR_TYPE['initial'])
    const [running, setRunning] = useState(false)
    const [workout, setWorkout] = useState({
        preparation: 3,
        work: 5,
        rest: 1,
        cycles: 3,
        sets: 5,
        longRest: 2,
    })
    const [workoutArray, setWorkoutArray] = useState([])

    const startWorkout = () => {
        /* const array = createWorkoutArray(workout)
        setWorkoutArray(array) */

        setRunning(true)
    }

    useEffect(() => {
        setWorkoutArray(createWorkoutArray(workout))
    }, [workout])

    return (
        <AppContext.Provider value={{ setBg, setRunning, workout, setWorkout }}>
            <AppStyled color={bg}>
                {running ? (
                    <>
                        <Working workout={workoutArray} />
                    </>
                ) : (
                    <>
                        <Title text={'Tabata Timer'} />
                        <Division>
                            <WorkoutCreator />
                            <TotalWorkout
                                workout={workoutArray}
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
