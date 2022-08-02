import React from 'react'

const FormSelectionBlocks = ({input, handleChange, fieldName, valueArray = [{value: 'Person', required: false, label: 'Person'}],}) => {

    let blocksElems = valueArray.map((value, i) => (
        <>
        <input
        key={`${i}-input`}
        type='radio'
        name={fieldName}
        value={value.value}
        checked={input[fieldName] === value.value}
        id={`${fieldName}-${value.value}`}
        onChange={evt => handleChange(evt)}
        required={value.required}
        />
        <label key={`${i}-label`} htmlFor={`${fieldName}-${value.value}`}>{value.label}</label>
        </>
    ))
  return blocksElems
}

export default FormSelectionBlocks