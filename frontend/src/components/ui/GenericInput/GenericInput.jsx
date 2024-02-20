import styles from './input.module.css'

const GenericInput = ({label, idString, required, placeholder, type='text'}) => {
  
    return (
      <div
          className={styles.inputContainer}
      >
          <label className={styles.label} htmlFor={idString}>{label}</label>
          <input
              className={styles.input}
              type={type}
              name={idString}
              id={idString}
              required={required}
              placeholder={placeholder}
          />
      </div>
  )
}
export default GenericInput