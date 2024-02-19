import styles from './question.module.css'
import MessageDataService from '../../services/message'
import { useNavigate } from 'react-router-dom'

const QuestionSidebar = ({subId, subMessages}) => {

  const navigate = useNavigate()

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
        <p className={styles.text}>Enter any questions or comments in the box below.  Please DO NOT enter any personal information.  The response to your question/comment will appear here.</p>
        <form  onSubmit={handleQuestion}>
            <textarea className={styles.textarea} defaultValue='' id="message" name="message" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
            <br />
            <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
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