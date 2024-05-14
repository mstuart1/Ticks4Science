
import styles from './radio.module.css'
import FormSelectionBlocks from '../FormSelectionBlocks'

//* value array like [{value: 'Person', required: false, label: 'Person'}]
const GenericRadio = ({label, id, name, valueArray, state='', handleChange}) => {
    
  return (
      <div className={styles.formDiv}>
          <label htmlFor={id}>
           {label}
          </label>
          <div className={styles.radioButtons}>
              <FormSelectionBlocks
                  fieldName={name}
                  valueArray={valueArray}
                  input={state}
                  id={id}
                  handleChange={handleChange}
              />
          </div>
      </div> 
  )
}
export default GenericRadio