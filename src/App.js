import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Clock } from './components/Clock'
import { TimeSelector } from './components/TimeSelector'
import { WorkoutItem } from './components/WorkoutItem'

import { secondsToMinutes, arrayFromNumber } from './utils'

const AppStyled = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Poppins', sans-serif;
`

const Title = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
    margin: 2rem 0;
`

const SubTitle = styled.h3`
    font-size: 2rem;
    line-height: 2rem;
`

const Selectors = styled.div`
    width: 900px;
    max-width: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`

const Division = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;

    align-items: flex-start;
`

const TotalWorkout = styled.div`
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ccc;
`

const StartButton = styled.button`
    width: 100%;
    max-width: 260px;
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

const Workout = styled.div`
    width: 100%;
    height: 100%;
    max-height: 50vh;
    padding: 0 10px;
    padding-top: 2rem;
    margin: 1.5rem 0;

    background-color: #fff;

    display: flex;
    flex-direction: column;

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
        background: #32a852;
        border-radius: 6px;
    }

    :after {
        content: '';
        display: block;
        height: 2rem;
        width: 100%;
    }
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
        setRunning(true)
    }

    useEffect(() => {
        console.log(workout)
    }, [workout])

    return (
        <AppStyled>
            <Title>Tabata timer</Title>

            {running ? (
                <Clock time={workout.preparation} color="red" />
            ) : (
                <Division>
                    <Selectors>
                        <TimeSelector
                            type="prepare"
                            handleChange={handleInputs}
                            startValue={workout.preparation}
                            name="preparation"
                        />
                        <TimeSelector
                            type="work"
                            handleChange={handleInputs}
                            name="work"
                        />
                        <TimeSelector
                            type="rest"
                            handleChange={handleInputs}
                            name="rest"
                        />
                        <TimeSelector
                            type="sets"
                            handleChange={handleInputs}
                            startValue={workout.sets}
                            name="sets"
                        />
                        <TimeSelector
                            type="cycles"
                            handleChange={handleInputs}
                            startValue={workout.cycles}
                            name="cycles"
                        />
                        <TimeSelector
                            type="longRest"
                            handleChange={handleInputs}
                            name="longRest"
                        />
                    </Selectors>
                    <TotalWorkout>
                        <SubTitle>Workout</SubTitle>

                        <Workout>
                            {workout.preparation > 0 && (
                                <div>
                                    <WorkoutItem
                                        text="Preparación"
                                        time={workout.preparation}
                                    />
                                </div>
                            )}
                            {arrayFromNumber(workout.cycles).map(
                                (cycle, index) => {
                                    return (
                                        <div key={`cycle_${index}`}>
                                            <SubTitle>
                                                Ronda {index + 1}
                                            </SubTitle>

                                            {arrayFromNumber(workout.sets).map(
                                                (set, i) => {
                                                    return (
                                                        <div key={`set_${i}`}>
                                                            <WorkoutItem
                                                                text="Ejercicio"
                                                                time={
                                                                    workout.work
                                                                }
                                                            />

                                                            {i ===
                                                            workout.sets - 1 ? (
                                                                index + 1 <
                                                                workout.cycles ? (
                                                                    <WorkoutItem
                                                                        text="Descanso largo"
                                                                        time={
                                                                            workout.longRest
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <SubTitle>
                                                                        Fin!
                                                                    </SubTitle>
                                                                )
                                                            ) : (
                                                                <WorkoutItem
                                                                    text="Descanso"
                                                                    time={
                                                                        workout.rest
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    )
                                }
                            )}
                            {/* {arrayFromNumber(workout.sets).map((set, i) => {
                                return (
                                    <div key={`set_${i}`}>
                                        <WorkoutItem>
                                            <h5>Ejercicio</h5>
                                            <span>
                                                {secondsToMinutes(workout.work)}
                                            </span>
                                        </WorkoutItem>
                                        <WorkoutItem>
                                            <h5>Descanso</h5>
                                            <span>
                                                {secondsToMinutes(workout.rest)}
                                            </span>
                                        </WorkoutItem>
                                    </div>
                                )
                            })} */}
                        </Workout>

                        <StartButton onClick={startWorkout}>
                            ¡Comenzar!
                            <i className="fas fa-play"></i>
                        </StartButton>
                    </TotalWorkout>
                </Division>
            )}
        </AppStyled>
    )
}

export default App
