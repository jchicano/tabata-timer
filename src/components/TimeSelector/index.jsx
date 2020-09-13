import React from 'react'

import { TimeSelectorStyled, Icon } from './styles'
import { ICONS, TEXTS, COLOR_TYPE } from '../../utils/constants'

import { InputInteger } from '../Inputs/index'

export const TimeSelector = ({ type, handleChange, startValue, name }) => {
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

    const onInputChange = e => {
        if (handleChange) {
            handleChange(e)
        }

        alert('cambio')
    }

    return (
        <TimeSelectorStyled color={COLOR_TYPE[type]}>
            <div className="selector-type">
                <Icon className={ICONS[type] || ICONS.work}></Icon>
                <span>{TEXTS[type] || ''}</span>
            </div>
            <div className="selector-time">
                {type === 'sets' || type === 'cycles' ? (
                    <InputInteger minValue={1} maxValue={50} initialValue={1} />
                ) : (
                    <input
                        type="text"
                        placeholder="0"
                        maxLength="4"
                        onChange={onInputChange}
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
