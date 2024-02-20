import styles from './survey.module.css'
import GenericInput from "../ui/GenericInput";
import {Link} from 'react-router-dom'

const PhotoSection = () => {
  
    // const [input, setInput] = useState({})
  
    // const handleImage = (evt) => {
    //   console.log('handling image', new FormData(evt.currentTarget))
    //   let file = evt.target.files[0];
    //   // console.log('handling front, file.type:', file.type)
    //   if (!file.type.includes('image')) {
    //     alert(`Please upload an image file`);
    //     return;
    //   }
    //   if (file.size > 8000000) {
    //     alert(`Please reduce file size before uploading`);
    //     return
    //   } else if (file.size < 200000) {
    //     alert(
    //       `Please check your image quality, image may be too small to view tick`
    //     );
    //     return
    //   } else {
    //     // setInput({...input, [evt.target.name]: file});
    //   }
    // }
  
    // console.log('PhotoSectioninput', input)
    return (
      <div className={styles.formSection}>
        <h4 className={styles.sectionTitle}>
          Please submit at least one photo of the tick between 2kb and 8Mb in
          size.
        </h4>
        <GenericInput label="Photo 1" idString="imageFront" type="file" required={true} />
  <GenericInput label='Photo 2' idString='imageBack' type='file' required={true}/> 
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
