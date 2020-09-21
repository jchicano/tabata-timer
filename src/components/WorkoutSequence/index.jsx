import { COLOR_TYPE, TEXTS } from '../../utils/constants'
import React, { useEffect, useRef, useState } from 'react'
import {
    Sequence,
    SequenceContainer,
    SequenceHeader,
    SequenceItem,
} from './styles'

import { secondsToMinutes } from '../../utils/utils'

export const WorkoutSequence = ({
    workoutArray,
    currentIndex = 0,
    currentType = null,
    sets = 0,
    totalSets = 0,
    cycles = 0,
    totalCycles = 0,
    remaining = 0,
}) => {
    const list = useRef(null)

    const nextSequenceItem = () => {
        const seq = list.current
        const currentPosition = list.current.scrollTop
        const itemHeigth = list.current.children[0]?.clientHeight

        if (currentIndex > 0) {
            seq.scroll(0, currentPosition + itemHeigth)
        }
    }

    useEffect(nextSequenceItem, [currentIndex])

    return (
        <SequenceContainer className=".d-none .d-md-block">
            <SequenceHeader color={COLOR_TYPE[currentType]}>
                <div>
                    <span>Series</span>
                    <p>
                        {sets}/{totalSets}
                    </p>
                </div>
                <div>
                    <span>Rondas</span>
                    <p>
                        {cycles}/{totalCycles}
                    </p>
                </div>
                <div>
                    <span>Restante</span>
                    <p>{secondsToMinutes(remaining)}</p>
                </div>
            </SequenceHeader>
            <Sequence ref={list}>
                {workoutArray.map((item, i) => {
                    return (
                        <SequenceItem
                            key={i}
                            bg={COLOR_TYPE[item.type]}
                            className={currentIndex === i && 'current'}
                        >
                            {TEXTS[item.type]}
                        </SequenceItem>
                    )
                })}
            </Sequence>
        </SequenceContainer>
    )
}
