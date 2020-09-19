import { COLOR_TYPE, ICONS, TEXTS } from '../../utils/constants'
import { Icon, TimeSelectorStyled } from './styles'
import { InputInteger, InputTime } from '../Inputs/index'

import React from 'react'

export const TimeSelector = ({ type, startValue, handleChange }) => {
    const onChange = (name, value) => {
        if (handleChange) {
            handleChange(name, value)
        }
    }

    return (
        <TimeSelectorStyled color={COLOR_TYPE[type]}>
            <div className="row">
                <div className="selector-type col-sm-9">
                    <span className="d-none .d-sm-block d-sm-none d-md-block">
                        {/* Hidden on xs and sm */}
                        <Icon className={ICONS[type] || ICONS.work}></Icon>
                    </span>
                    <span className="ml-md-5">{TEXTS[type] || ''}</span>
                </div>
                <div className="selector-time col-sm-3">
                    {type === 'sets' || type === 'cycles' ? (
                        <InputInteger
                            minValue={1}
                            maxValue={50}
                            initialValue={startValue}
                            handleChange={onChange}
                            name={type}
                        />
                    ) : (
                        <InputTime
                            type="text"
                            placeholder="0"
                            handleChange={onChange}
                            initialValue={startValue}
                            name={type}
                        />
                    )}
                </div>
            </div>
        </TimeSelectorStyled>
    )
}
