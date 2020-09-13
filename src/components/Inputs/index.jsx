import React, { useState } from 'react'

import { InputContainer } from './styles'

export const InputInteger = ({
    initialValue,
    minValue,
    maxValue,
    placeholder,
}) => {
    const [value, setValue] = useState(initialValue)

    const handleDown = () => {
        if (value > minValue) {
            setValue(prevValue => prevValue - 1)
        }
    }

    const handleUp = () => {
        if (value < maxValue) {
            setValue(prevValue => prevValue + 1)
        }
    }

    return (
        <InputContainer>
            <span className="control left" onClick={handleDown}>
                <i class="fas fa-minus"></i>
            </span>
            <input
                type="number"
                min={minValue}
                max={maxValue}
                value={value}
                placeholder={placeholder}
            />
            <span className="control right" onClick={handleUp}>
                <i class="fas fa-plus"></i>
            </span>
        </InputContainer>
    )
}
