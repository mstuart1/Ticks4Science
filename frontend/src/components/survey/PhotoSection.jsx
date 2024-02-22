import styles from './survey.module.css'
import GenericInput from "../ui/GenericInput";
import {Link} from 'react-router-dom'

const PhotoSection = ({id}) => {
  
    return (
      <div className={styles.formSection}>
        <h4 className={styles.sectionTitle}>
          Please submit at least one photo of the tick between 2kb and 8Mb in
          size.
        </h4>
        <GenericInput label="Photo 1" idString={`tick${id}.imageFront`} type="file" required={true} />
  <GenericInput label='Photo 2' idString={`tick${id}.imageBack`} type='file' required={false}/> 
        <p>
          Reminder: Review{" "}
          <Link className={styles.innieLink} to="/photo">
            <span>How to Take a Tick Pic</span>
          </Link>
        </p>
      </div>
    )
  }
  
export default PhotoSection  
