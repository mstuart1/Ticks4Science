import styles from './survey.module.css'
import GenericTextarea from '../ui/GenericTextarea'

const AdditionalInfo = () => {

    return (
      <div className={styles.formSection}>
            <GenericTextarea label=' Any additional information about the environment, tick(s), and or
                person/pet: 
                
                ' name='additionalInfo' />
                {/* // (please keep character number below 200) */}
            {/* Character count: {input.additionalInfo.length > 200 ? <span style={{ color: 'red' }}>{input.additionalInfo.length}</span> : (<span>{input.additionalInfo.length}</span>)} */}
          
          </div>
    )
  }
  
  export default AdditionalInfo