import styles from './input.module.css'

const GenericInput = ({handleChange, label, name, id, required, placeholder, type = 'text', accept = "image/*" , value}) => {

    return (
        <div
            className={styles.inputContainer}
        >
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input
                className={styles.input}
                type={type}
                accept={accept}
                name={name}
                id={id}
                value={value}
                required={required}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}
export default GenericInput