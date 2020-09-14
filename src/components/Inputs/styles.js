import styled from 'styled-components'

export const InputContainer = styled.div`
    height: 100%;
    position: relative;

    display: flex;

    input {
        width: 100%;
        height: 100%;
        padding: 0.5rem 1rem;

        font-size: 28px;
        line-height: 28px;

        border: none;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);

        text-align: center;
    }

    input:read-only {
        user-select: none;
        pointer-events: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    .control {
        height: 100%;
        width: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        color: #3268a8;
        font-size: 24px;

        cursor: pointer;

        &.left {
            left: 0;
            /* transform: translateY(-50%); */
        }

        &.right {
            right: 0;
        }
    }
`
