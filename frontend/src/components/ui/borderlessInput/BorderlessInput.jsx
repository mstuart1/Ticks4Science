import React from 'react'
import styled from 'styled-components'

const Styles = {

    CustomField: styled.label`
    *, *::, *::after {
        box-sizing: border-box;   
    }
    --field-padding: 1.2rem;
    font-size: 1.4rem;
    position: relative;
    border-top: 2rem solid transparent;
    margin-bottom: .5rem;
    input {
        border: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: ${({colors}) => colors.bg};
        padding: var(--field-padding);
        border-radius: 3px;
        width: 25rem;
        outline: none;
        font-size: 1.4rem;
    }
    .placeholder{
    position: absolute;
    left: var(--field-padding);
    // bottom: 50%;
    top: 2.2rem;  
    transform: translateY(-50%);
    width: calc(100% - (var(--field-padding) * 2));  
    color: ${({colors}) => colors.ph};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 100%;
    transition: 
        top: 0.3s ease,
        color 0.3s ease,
        font-size 0.3s ease;
    }
    input:focus + .placeholder, input.dirty + .placeholder, input:not(:placeholder-shown) + .placeholder {
        top: -1rem;
        font-size: 1rem;
        color: ${({colors}) => colors.label};
    }
    .error-message {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 8px;
        font-size: 12px;
        background: ${({colors}) => colors.errorBg};
        color: ${({colors}) => colors.errorText};
        height: 24px;
    }
    .error-message:empty {
        opacity: 0;
    }
    `,
    
}

const BorderlessInput = ({ colors = { bg: '#f2f2f2', text: 'black', ph: '#aaa', label: '#222', errorBg: '#d30909', errorText: '#fff' }, placeholder = 'Enter Email', errorText='The email is invalid', children }) => {
    return (
        <Styles.CustomField colors={colors}>
            {children}
            <span className='placeholder'>{placeholder}</span>
            <span class="error-message" aria-live="polite">{errorText}</span>
        </Styles.CustomField>
    )
}

export default BorderlessInput