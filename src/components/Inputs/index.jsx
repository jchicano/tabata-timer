import React, { useEffect, useState } from 'react'

import { InputContainer } from './styles'

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
                min={minValue}
                max={maxValue}
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

export const InputMinutesAndSeconds = () => {}
