import { css } from 'styled-components';

const commonButtonStyles = css`
    border: none;
    cursor: pointer;
    outline: none;
    transition: transform 0.1s ease-out, background-color 0.1s ease-out, box-shadow 0.1s ease-out, opacity 0.1s ease-out;

    &:active {
        transform: scale(0.96);
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); 
    }

    &:focus-visible {
        outline: 2px solid #49C48F; 
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export {commonButtonStyles};