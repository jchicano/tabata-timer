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
