const FormSelectionBlocks = ({ input, handleChange, fieldName, valueArray = [{ value: 'Person', required: false, label: 'Person' }] }) => {
  
  let blocksElems = valueArray.map((value, i) => (
    <div key={i}>
      <input
        key={`${i}-input`}
        type='radio'
        name={fieldName}
        value={value.value}
        checked={input === value.value}
        id={`${fieldName}-${value.value}`}
        onChange={handleChange}

      />
      <label key={`${i}-label`} htmlFor={`${fieldName}-${value.value}`}>{value.label}</label>
    </div>
  ))
  return blocksElems
}

export default FormSelectionBlocks