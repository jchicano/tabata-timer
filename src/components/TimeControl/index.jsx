import { Button, Container } from './styles'
import React, { useState } from 'react'

export const TimeControls = ({
    handleResume,
    handleStop,
    paused,
    handlePause,
    handleRestart,
}) => {
    const [isPause, setIsPause] = useState(paused || false)

    const onStop = () => {
        if (handleStop) {
            handleStop()
        }
    }

    const onPause = () => {
        setIsPause(true)
        if (handlePause) {
            handlePause()
        }
    }

    const onResume = () => {
        setIsPause(false)
        if (handleResume) {
            handleResume()
        }
    }

    const onRestart = () => {
        if (handleRestart) {
            handleRestart()
        }
    }

    return (
        <Container className="pb-5">
            <Button onClick={onRestart}>
                <i className="fas fa-redo"></i>
            </Button>
            {isPause ? (
                <Button onClick={onResume}>
                    <i className="fas fa-play"></i>
                </Button>
            ) : (
                <Button onClick={onPause}>
                    <i className="fas fa-pause"></i>
                </Button>
            )}
            <Button onClick={onStop}>
                <i className="fas fa-stop"></i>
            </Button>
        </Container>
    )
}
