export const secondsToMinutes = seconds => {
    const minutes = Math.floor(seconds / 60)
    const newSeconds = Math.floor(seconds % 60)

    return `${minutes
        .toString()
        .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}

export const arrayFromNumber = number => {
    let array = []
    for (let i = 1; i <= number; i++) {
        array.push(number)
    }

    return array
}

export const createWorkoutArray = workout => {
    const fakeArray = [
        {
            type: 'prepare',
            time: workout.preparation,
        },
    ]

    arrayFromNumber(workout.cycles).forEach((cycle, indexCycle) => {
        arrayFromNumber(workout.sets).forEach((set, indexSet) => {
            if (workout.work > 0) {
                const work = {
                    type: 'work',
                    time: workout.work,
                }
                fakeArray.push(work)
            }

            if (workout.rest > 0 && indexSet < workout.sets - 1) {
                const rest = {
                    type: 'rest',
                    time: workout.rest,
                }

                fakeArray.push(rest)
            }

            if (workout.longRest > 0 && indexSet === workout.sets - 1) {
                if (indexCycle < workout.cycles - 1) {
                    const longRest = {
                        type: 'longRest',
                        time: workout.longRest,
                    }

                    fakeArray.push(longRest)
                }
            }
        })
    })

    return fakeArray
}
