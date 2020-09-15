export const secondsToMinutes = seconds => {
    const minutes = Math.floor(seconds / 60)
    const newSeconds = Math.floor(seconds % 60)

    return `${minutes
        .toString()
        .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}

export const formatedToSeconds = formatedTime => {
    const string = formatedTime.replace(':', '')

    let seconds, mins, time
    switch (string.length) {
        case 1:
        case 2:
            return Number(string)
        case 3:
            mins = Number(String(string).substr(0, 1))
            seconds = Number(String(string).substr(1, 2))

            time = mins * 60 + seconds
            return time
        case 4:
            mins = Number(String(string).substr(0, 2))
            seconds = Number(String(string).substr(2, 2))

            time = mins * 60 + seconds
            return time
        default:
            return 0
    }
}

export const arrayFromNumber = number => {
    let array = []
    for (let i = 1; i <= number; i++) {
        array.push(number)
    }

    return array
}

export const createWorkoutArray = workout => {
    const fakeArray = []
    if (workout.preparation > 0) {
        fakeArray.push({
            type: 'preparation',
            time: workout.preparation,
        })
    }

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

    fakeArray.push({
        type: 'finish',
        time: 0,
    })

    return fakeArray
}

export function setCaretPosition(elem, caretPos) {
    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange()
            range.move('character', caretPos)
            range.select()
        } else {
            if (elem.selectionStart) {
                elem.focus()
                elem.setSelectionRange(caretPos, caretPos)
            } else elem.focus()
        }
    }
}
