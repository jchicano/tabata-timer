import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    border-radius: 6px;

    input {
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
