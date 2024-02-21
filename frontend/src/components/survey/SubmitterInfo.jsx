import GenericInput from '../ui/GenericInput'
import styles from './survey.module.css'
const SubmitterInfo = () => {
    return (
        <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Submitter Information</h4>
            <div className={styles.responsiveDiv}>
                <GenericInput label="Municipality *" idString="userMuni" required={true} placeholder="Where you live" />
                <GenericInput label="Zip Code *" idString="userZip" required={true} placeholder="Where you live" />
                <GenericInput label="Would you like to receive email notifications about your tick(s)?" placeholder={'email'} idString="email" required={false}  type='email' />
            </div>
        </div>)
}

export default SubmitterInfo