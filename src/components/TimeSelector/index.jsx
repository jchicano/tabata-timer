import React from 'react'

import { TimeSelectorStyled, Icon } from './styles'

const ICONS = {
    work: 'fas fa-running',
    rest: 'fas fa-chair',
    longRest: 'fas fa-couch',
    prepare: 'fas fa-spinner',
    sets: 'fas fa-retweet',
    cycles: 'fas fa-redo',
}

const TEXTS = {
    work: 'Ejercicio',
    rest: 'Descanso',
    longRest: 'Descanso entre rondas',
    prepare: 'Preparación',
    sets: 'Series',
    cycles: 'Rondas',
}

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

    return (
        <TimeSelectorStyled>
            <div className="selector-type">
                <Icon className={ICONS[type] || ICONS.work}></Icon>
                <span>{TEXTS[type] || ''}</span>
            </div>
            <div className="selector-time">
                <input
                    type="text"
                    placeholder="0"
                    maxLength="4"
                    onChange={handleChange}
                    onKeyDown={validateInput}
                    defaultValue={startValue}
                    name={name}
                />
            </div>
        </TimeSelectorStyled>
    )
}
