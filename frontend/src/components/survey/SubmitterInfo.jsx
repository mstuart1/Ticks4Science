import GenericInput from '../ui/GenericInput'
import styles from './Survey.module.css'
const SubmitterInfo = ({id, data={}, handleChange }) => {
    return (
        <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Submitter Information</h4>
            <div className={styles.responsiveDiv}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <GenericInput label="City *" name={`userMuni,${id}`} required={true} placeholder="Where you live"
                         value={data.userMuni || null}
                          handleChange={handleChange}/>
                        
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <GenericInput label="Zip Code *" name={`userZip,${id}`} required={true} placeholder="Where you live" 
                        value={data.userZip || null}
                         handleChange={handleChange} />
                    </div>
                </div>
                        <GenericInput label="Would you like to receive email notifications about your tick(s)?" placeholder={'email'} name={`email,${id}`} required={false} type='email'  
                        value={data.email || null} 
                        handleChange={handleChange} />
               
               
            </div>
        </div>)
}

export default SubmitterInfo