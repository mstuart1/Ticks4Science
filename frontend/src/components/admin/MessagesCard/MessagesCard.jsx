import styles from './Messages.module.css'
import MessageDataService from '../../../services/message'
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'

const MessagesCard = ({messages, user, submissionId}) => {
  const navigate = useNavigate()
// console.log('messages', messages, 'user', user, 'submissionId', submissionId)
  let sortedMessages = messages?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  const [ansMsgs, setAnsMsgs] = useState([])

    useEffect(() => {
      let freshMsgs = messages?.filter(msg => msg.answered).map((msg) => msg.id).filter(msg => msg !== undefined)
      setAnsMsgs(freshMsgs)
    }, [messages])
  
  const handleAnswered = async (id, evt) => {
    let {checked} = evt.target
    await MessageDataService.updateMessage({id, answered: checked})
    if (checked) {
      let freshMsgs = [...new Set([...ansMsgs, id])].filter(msg => msg !== undefined)
      // console.log('freshMsgs', freshMsgs)
      setAnsMsgs(freshMsgs)
    } else {
      let freshMsgs = ansMsgs.filter(msg => msg !== id).filter(msg => msg !== undefined)
      // console.log('freshMsgs', freshMsgs)
      setAnsMsgs(freshMsgs)
    }
  }

  const handleQuestion = async (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    formData.append('submissionId', submissionId)
    formData.append('role', 'admin')
    formData.append('adminId', user.id)
    formData.append('answered', true)
    const formObject = Object.fromEntries(formData)
    // console.log('Question', formObject)
    await MessageDataService.createMessage(formObject);
    navigate(0, { replace: true })
        return
  }

// 
  // console.log('answered messages', ansMsgs)
  return (
    <div className={styles.outlineCard}>
      <h2 className={styles.title}>Add a public message to the submission</h2>
      <form onSubmit={handleQuestion}>
        <textarea className={styles.textarea} defaultValue='' id="message" name="message" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
        <br />
        <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
      </form>
      {!!sortedMessages && !!sortedMessages.length && <>
        <h2 className={styles.title}>Message History</h2>
        {/* <h3>most recent on top</h3> */}
        
          {sortedMessages.map((message) => {
            // console.log('messageID', message)
            return (
            <div key={message.id} className={styles.messageDiv}><div className={styles.text}><span className={styles.date}>{new Date(message.createdAt).toString()} from {message.role === 'submitter' ? message.role :  message.admin.firstName }:</span><br /> <span className={styles.highlight} style={{ background: message.role === 'admin' ? '#e3f3ef' : '#fce48b' }}>{message.message}</span></div>
           {message.role === 'submitter' && <form>
              <label htmlFor='answered'>Answered? {'   '}</label>
              <input  type='checkbox' id='answered' name='answered' checked={ansMsgs?.includes(message.id)} onChange={(evt) => handleAnswered(message.id, evt)} />
              </form>
          }
            </div>)}
          )}
        
        </>}
      
    </div>
  )
}
export default MessagesCard