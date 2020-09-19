import { AppStyled, Division } from './styles'
import React, { useEffect, useState } from 'react'

import { COLOR_TYPE } from './utils/constants'
import { Title } from './components/Titles'
import { TotalWorkout } from './components/TotalWorkout'
import { Working } from './components/Working'
import { WorkoutCreator } from './components/WorkoutCreator'
import { createWorkoutArray } from './utils/utils'

export const AppContext = React.createContext({})

function App() {
    const [bg, setBg] = useState(COLOR_TYPE['initial'])
    const [running, setRunning] = useState(false)
    const [workout, setWorkout] = useState({
        preparation: 10,
        work: 20,
        rest: 10,
        cycles: 2,
        sets: 8,
        longRest: 60,
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
            <div className="bg-dark">
                <div className="container-fluid pb-5">
                    {running ? (
                        <>
                            <Working workout={workoutArray} />
                        </>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-md-12">
                                    <Title text={'Tabata Timer'} />
                                </div>
                            </div>
                            {/* <Division> */}
                            <div className="row">
                                <div className="col-md-8 col-sm-12">
                                    <WorkoutCreator />
                                </div>
                                <div className="col-md-4 col-sm-12 pt-5">
                                    <TotalWorkout
                                        workout={workoutArray}
                                        handleStart={startWorkout}
                                    />
                                </div>
                            </div>
                            {/* </Division> */}
                        </>
                    )}
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default App
