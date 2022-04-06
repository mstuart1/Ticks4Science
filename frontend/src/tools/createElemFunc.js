export const createRadioElems = (elemArray, inputName, handleChange, input) => {
    return elemArray.map(item => (   < >
      <input
      key={`input-${item.id}`}
       type='radio'
       name={inputName}
       value={item.text}
       checked={input.foundOn === item.text}
       id={`${inputName}-${item.text}`}
       onChange={handleChange}
       />
       <label htmlFor={`${inputName}-${item.text}`}>{item.text}</label>
     </>)
     
    )
  }
  
  
  
  export const createInputElems = (elemArray, handleChange, input) => {
    return elemArray.map(item => (
      <div key={item.id}>
      <label htmlFor={item.name}>{item.label}</label>
      <input 
          type={item.type}
          name={item.name}
          id={item.name}
          required={item.required}
          placeholder={item.placeholder}
          value={input[item.name] || ''}
          onChange={handleChange}
      />
      </div>
    ))
  }
  