import OutlineCard from "../../ui/outlineCard/OutlineCard"
import styles from './messages.module.css'
import MessageDataService from '../../../services/message'
import { useEffect, useState } from "react"

const MessagesCard = ({messages, user, submissionId}) => {
// console.log('messages', messages, 'user', user, 'submissionId', submissionId)
  let sortedMessages = messages?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

  const [ansMsgs, setAnsMsgs] = useState([])

    useEffect(() => {
      setAnsMsgs(messages?.map((msg) => {
        if (msg.answered) {return msg.id} else {return}}))
    }, [])
  
  const handleAnswered = async (id, evt) => {
    let {checked} = evt.target
    await MessageDataService.updateMessage({id, answered: checked})
    if (checked) {
      let freshMsgs = [...new Set([...ansMsgs, id])]
      setAnsMsgs(freshMsgs)
    } else {
      let freshMsgs = ansMsgs.filter(msg => msg !== id)
      setAnsMsgs(freshMsgs)
    }

  }

  const handleQuestion = async (evt) => {
    // evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    formData.append('submissionId', submissionId)
    formData.append('role', 'admin')
    formData.append('adminId', user.id)
    formData.append('answered', true)
    const formObject = Object.fromEntries(formData)
    // console.log('Question', formObject)
    let response = await MessageDataService.createMessage(formObject);

  }


  console.log('answered messages', ansMsgs)
  return (
    <OutlineCard width="30rem">
      <h2 className={styles.title}>Add a message to the submission</h2>
      <form onSubmit={handleQuestion}>
        <textarea className={styles.textarea} defaultValue='' id="message" name="message" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
        <br />
        <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
      </form>
      {!!sortedMessages && !!sortedMessages.length && <>
        <h2 className={styles.title}>Message History</h2>
        {/* <h3>most recent on top</h3> */}
        
          {sortedMessages.map((message) => {
            console.log('messageID', message.id)
            return (
            <div key={message.id} className={styles.messageDiv}><div className={styles.text}><span className={styles.date}>{new Date(message.createdAt).toString()} from {message.role === 'submitter' ? message.role : message.admin.firstName}:</span><br /> <span className={styles.highlight} style={{ background: message.role === 'admin' ? '#fff6d4' : '#e3f3ef'}}>{message.message}</span></div>
           {message.role === 'submitter' && <form>
              <label htmlFor='answered'>Answered? {'   '}</label>
              <input  type='checkbox' id='answered' name='answered' checked={ansMsgs?.includes(message.id)} onChange={(evt) => handleAnswered(message.id, evt)} />
              </form>
          }
            </div>)}
          )}
        
        </>}
      
    </OutlineCard>
  )
}
export default MessagesCard