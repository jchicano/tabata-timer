import React, { useContext } from 'react'

import { TimeSelectorStyled, Icon } from './styles'
import { ICONS, TEXTS, COLOR_TYPE } from '../../utils/constants'

import { AppContext } from '../../App'

import { InputInteger, InputTime } from '../Inputs/index'

export const TimeSelector = ({ type, handleChange, startValue, name }) => {
    const { setWorkout, workout } = useContext(AppContext)

    const onChange = (name, value) => {
        setWorkout({
            ...workout,
            [name]: value,
        })
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
                        maxValue={50}
                        initialValue={1}
                        handleChange={onChange}
                        name={type}
                    />
                ) : (
                    <InputTime
                        type="text"
                        placeholder="0"
                        onChange={onChange}
                        defaultValue={startValue}
                        name={name}
                    />
                )}
            </div>
        </TimeSelectorStyled>
    )
}
