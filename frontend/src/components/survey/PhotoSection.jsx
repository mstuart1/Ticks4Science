import styles from './Survey.module.css'
import GenericInput from "../ui/GenericInput";
import {Link} from 'react-router-dom'

const PhotoSection = ({id, handleData}) => {
  
    return (
      <div className={styles.formSection}>
        <h4 className={styles.sectionTitle}>
          Please submit at least one photo of the tick between 2kb and 8Mb in
          size.
        </h4>
        <GenericInput handleChange={handleData} label="Photo 1*" id={'photoFront'} name={`imageFront,${id}`} type="file" required={true} />
        <GenericInput handleChange={handleData} label='Photo 2' id={'photoBack'} name={`imageBack,${id}`} type='file' required={false}/> 
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
