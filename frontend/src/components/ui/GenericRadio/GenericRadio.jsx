
import styles from './radio.module.css'
import FormSelectionBlocks from '../FormSelectionBlocks'

//* value array like [{value: 'Person', required: false, label: 'Person'}]
const GenericRadio = ({label, idString, valueArray, state, handleChange}) => {
  return (
      <div className={styles.formDiv}>
          <label htmlFor={idString}>
           {label}
          </label>
          <div className={styles.radioButtons}>
              <FormSelectionBlocks
                  fieldName={idString}
                  valueArray={valueArray}
                  input={state}
                  handleChange={handleChange}
              />
          </div>
      </div> 
  )
}
export default GenericRadio