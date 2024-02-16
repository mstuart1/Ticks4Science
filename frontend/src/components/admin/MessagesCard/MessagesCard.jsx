import OutlineCard from "../../ui/outlineCard/OutlineCard"
import styles from './messages.module.css'
import MessageDataService from '../../../services/message'

const MessagesCard = ({messages, user, submissionId}) => {
  
  const handleAnswered = async (id, evt) => {
    // console.log('evt', evt.target.checked)
    let response = await MessageDataService.updateMessage({id, answered: evt.target.checked})
  }

  return (
    <OutlineCard width="30rem">
        {/* <h2>Messages</h2> */}
      {!!messages.length && <>
        <h2 className={styles.title}>Message History</h2>
        
          {messages.map((message) => (
            <div className={styles.messageDiv}><div key={message.id} className={styles.text}><span className={styles.date}>{new Date(message.createdAt).toString()} from {message.role}:</span><br /> <span className={styles.highlight}>{message.message}</span></div>
           {message.role === 'submitter' && <>
              <label htmlFor='answered'>Answered? {'   '}</label>
              <input  type='checkbox' id='answered' name='answered' value={message.answered} onChange={(evt) => handleAnswered(message.id, evt)} />
              </>
          }
            </div>)
          )}
        
        </>}

    </OutlineCard>
  )
}
export default MessagesCard