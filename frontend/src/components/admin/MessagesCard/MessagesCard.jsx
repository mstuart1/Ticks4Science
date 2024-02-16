import OutlineCard from "../../ui/outlineCard/OutlineCard"
import styles from './messages.module.css'

const MessagesCard = ({messages, user, submissionId}) => {
  
  const handleAnswered = async (id) => {
    console.log('id', id)
    // todo create update message function
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
              <input  type='checkbox' id='answered' name='answered' value={message.answered} onChange={() => handleAnswered(message.id)} />
              </>
          }
            </div>)
          )}
        
        </>}

    </OutlineCard>
  )
}
export default MessagesCard