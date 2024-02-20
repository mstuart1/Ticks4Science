import styles from './textarea.module.css'

const GenericTextarea = ({ label, idString, placeholder = "Drag the bottom right corner to create more space if needed." }) => {
  return (
      <div className={styles.formDiv}>
          <label className={styles.label} htmlFor={idString}>
              {label}
          </label>
        <textarea  id={idString} name={idString} rows="4" cols="30" placeholder={placeholder}></textarea>
    </div>
  )
}
export default GenericTextarea