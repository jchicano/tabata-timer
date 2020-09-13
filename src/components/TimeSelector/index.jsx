import React, { useContext } from 'react'

import { TimeSelectorStyled, Icon } from './styles'
import { ICONS, TEXTS, COLOR_TYPE } from '../../utils/constants'

import { AppContext } from '../../App'

import { InputInteger } from '../Inputs/index'

export const TimeSelector = ({ type, handleChange, startValue, name }) => {
    const { setWorkout, workout } = useContext(AppContext)

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

    const handleInputs = e => {
        /* setWorkout({
            ...workout,
            [e.target.name]: Number(e.target.value) || 0,
        }) */

        console.log('asgdasgdjh')
    }

    return (
        <TimeSelectorStyled color={COLOR_TYPE[type]}>
            <div className="selector-type">
                <Icon className={ICONS[type] || ICONS.work}></Icon>
                <span>{TEXTS[type] || ''}</span>
            </div>
            <div className="selector-time">
                {type === 'sets' || type === 'cycles' ? (
                    <InputInteger
                        minValue={1}
                        maxValue={5}
                        initialValue={1}
                        handleChange={handleInputs}
                    />
                ) : (
                    <input
                        type="text"
                        placeholder="0"
                        maxLength="4"
                        onChange={handleInputs}
                        onKeyDown={validateInput}
                        defaultValue={startValue}
                        name={name}
                        autoComplete="off"
                    />
                )}
            </div>
        </TimeSelectorStyled>
    )
}
