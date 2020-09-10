import React from 'react'

export const TimeControls = ({ handleResume, handleStop, isPause }) => {
    const onStop = () => {
        if (handleStop) {
            handleStop()
        }
    }

    const onResume = () => {
        if (handleResume) {
            handleResume()
        }
    }

    return (
        <div>
            {isPause ? (
                <button onClick={onResume}>Resume</button>
            ) : (
                <button onClick={onStop}>Stop</button>
            )}
        </div>
    )
}
