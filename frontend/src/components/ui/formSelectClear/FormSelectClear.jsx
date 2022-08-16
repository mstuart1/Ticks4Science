import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.div`

  label {
    line-height: 1.25rem;
    // font-weight: bold;
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  select {
    padding:1rem;
    margin: 1rem;
    // color: ${({ theme }) => theme.colors.main};
    // border: 0.5px solid ${({ theme }) => theme.colors.main};
    border-radius: 0.25em;
    cursor: pointer;
    font-size: 1.6rem;
    
  }

  select:focus,
  select:hover {
    // remove the default blue outline
    outline: none;
    // border: 1px solid ${({ theme }) => theme.colors.main};
  }

  // can only style the background and the font color - not working for me except in multi select
  option {
    background: #f8f8f8;
    color: #000;
  }
`;

const FormSelectClear = ({ name = '', optionArray = [], selectedValue = 'default', handleSelect, defaultText = 'Select from dropdown', multipleBool = false, useLabel=false, label='' }) => {
    return (
<StyledSelect>
{useLabel && (
        <label htmlFor={name}>
          {label}
          <br />
        </label>
      )}
        <select
        
            multiple={multipleBool}
            // using this line causes the entire app to stop rendering
            // style={multipleBool && {styleForArrow}}
            name={name}
            onChange={(evt) => {
                handleSelect(evt)
            }} value={selectedValue}>
            <option value={0}>{defaultText}</option>
            {optionArray.map((option, i) => (
                <option key={i} value={option.value || option.id}>{option.label || option.name} </option>
            ))}
        </select>
        </StyledSelect>
    )
}


export default FormSelectClear
