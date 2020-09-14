import React, { useEffect, useState } from 'react'
import { secondsToMinutes } from '../../utils/utils'

import { InputContainer } from './styles'

const INITIAL_TIME_VALUE = '00:00'

export const InputInteger = ({
    initialValue,
    minValue,
    maxValue,
    placeholder,
    name,
    handleChange,
}) => {
    const [value, setValue] = useState(initialValue)
    const [intervalState, setIntervalState] = useState(null)

    const minus = () => {
        if (value > minValue) {
            setValue(prevValue => prevValue - 1)
        }
    }

    const plus = () => {
        if (value < maxValue) {
            setValue(prevValue => prevValue + 1)
        }
    }

    const onDownMinus = () => {
        let currentValue = value

        const t = setInterval(() => {
            if (currentValue > minValue) {
                minus()
                currentValue--
            } else {
                clearInterval(t)
            }
        }, 500)

        setIntervalState(t)
    }

    const onDownPlus = () => {
        let currentValue = value

        const t = setInterval(() => {
            if (currentValue < maxValue) {
                plus()
                currentValue++
            } else {
                clearInterval(t)
            }
        }, 400)

        setIntervalState(t)
    }

    const handleMouseUp = () => {
        clearInterval(intervalState)
    }

    const onChange = () => {
        if (handleChange) {
            handleChange(name, value)
        }
    }

    useEffect(onChange, [value])

    return (
        <InputContainer>
            <span
                className="control left"
                onClick={minus}
                onMouseDown={onDownMinus}
                onMouseUp={handleMouseUp}
            >
                <i className="fas fa-minus"></i>
            </span>
            <input
                type="number"
                value={value}
                placeholder={placeholder}
                name={name}
                readOnly
            />
            <span
                className="control right"
                onClick={plus}
                onMouseDown={onDownPlus}
                onMouseUp={handleMouseUp}
            >
                <i className="fas fa-plus"></i>
            </span>
        </InputContainer>
    )
}

export const InputTime = ({
    initialValue,
    minValue,
    maxValue,
    placeholder,
    name,
    handleChange,
}) => {
    const [value, setValue] = useState(INITIAL_TIME_VALUE)

    const validateInput = e => {
        const isNumber = !(e.keyCode < 48 || e.keyCode > 57)
        const isNumberPad = !(e.keyCode < 96 || e.keyCode > 105)
        const isSpecialChar =
            e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 46
        const isArrow = !(e.keyCode < 37 || e.keyCode > 40)

        !isNumber &&
            !isSpecialChar &&
            !isNumberPad &&
            !isArrow &&
            e.preventDefault()
    }

    const onChange = e => {
        let elValue = e.target.value

        elValue = elValue.replace(':', '')
        if (elValue.length === 3) {
            const a = String(elValue).substr(0, 1)
            const b = String(elValue).substr(1, 2)

            elValue = `${a}:${b}`
        } else if (elValue.length === 4) {
            const a = String(elValue).substr(0, 2)
            const b = String(elValue).substr(2, 2)

            elValue = `${a}:${b}`
        }

        setValue(elValue)
    }

    const onBlur = e => {
        if (value.length === 0) {
            setValue(INITIAL_TIME_VALUE)
        } else if (value.length <= 5) {
            let newValue = value.padStart('5', '00:')

            //correccion de segundos > 60
            const mins = newValue[0] + newValue[1]
            const secs =
                newValue[newValue.length - 2] + newValue[newValue.length - 1]

            if (secs >= 60) {
                const minsInSecs = mins * 60
                const newSecs = Number(secs) + Number(minsInSecs)

                newValue = secondsToMinutes(newSecs)
            }
            setValue(newValue)
        }
    }

    return (
        <InputContainer type="time">
            <input
                type="text"
                maxLength="5"
                onKeyDown={validateInput}
                value={value || ''}
                onChange={onChange}
                className="time"
                onBlur={onBlur}
            />
        </InputContainer>
    )
}
