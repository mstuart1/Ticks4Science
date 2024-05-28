import styles from './question.module.css'
import MessageDataService from '../../services/message'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const QuestionSidebar = ({subId, subMessages}) => {

  const navigate = useNavigate()
  const [showSubmit, setShowSubmit] = useState(false)

    const handleQuestion = async (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.currentTarget)
        formData.append('submissionId', subId)
        formData.append('role', 'submitter')
        const formObject = Object.fromEntries(formData)
      await MessageDataService.createMessage(formObject);
      navigate(0, { replace: true })
        
    }
    
  return (
    <div className={styles.cont} >
        <h2 className={styles.title}>Questions?</h2>
      <p className={styles.text}>Enter any questions or comments in the box below. Please DO NOT enter any personal/identifying information as this chat is public to anyone who searches your tick ID#. If you have a more private inquiry, use the "contact us" button on our homepage. The response to your question/comment will appear below.</p>
      <div className={styles.checkboxDiv}>
        <label className={styles.text}>
        Click the box to acknowledge the message above; a submit button will not be available until the box is checked.
      </label>
        <input className={styles.input} type="checkbox" onChange={(evt) => setShowSubmit(evt.target.checked)}/>
      </div>
        <form  onSubmit={handleQuestion}>
            <textarea className={styles.textarea} defaultValue='' id="message" name="message" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
            <br />
            {showSubmit &&

            <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
            }
        </form>
          
          {!!subMessages.length &&  <>
        <h2 className={styles.title}>Message History</h2>
        <h3>most recent on top</h3>
            <ul className={styles.list}>
          {subMessages.map((message) => (<li key={message.id} className={styles.text}><span className={styles.date}>{new Date(message.createdAt).toString()} from {message.role}:</span><br /><span className={styles.highlight} style={{ background: message.role === 'admin' ? '#fff6d4' : '#e3f3ef' }}>{message.message}</span></li>)
              )}
            </ul></>}
    </div>
  )
}
export default QuestionSidebar