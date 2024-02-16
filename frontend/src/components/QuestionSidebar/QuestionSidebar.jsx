import styles from './question.module.css'
const QuestionSidebar = ({subId}) => {
    // todo create send question function

    const handleQuestion = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.currentTarget)
        formData.append('subId', subId)
        formData.append('role', 'submitter')
        const formObject = Object.fromEntries(formData)
        console.log('Question', formObject)
        
    }
    // todo create fetch message history function
    let messages = true
  return (
    <div className={styles.cont} >
        <h2 className={styles.title}>Questions?</h2>
        <p className={styles.text}>Enter any questions or comments in the box below.  Please DO NOT enter any personal information.  The response to your question/comment will appear here.</p>
        <form  onSubmit={handleQuestion}>
            <textarea className={styles.textarea} id="message" name="message" rows="4" cols="30" placeholder="Drag the bottom corner to create more space if needed."></textarea>
            <br />
            <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
        </form>
          
          {!!messages &&  <><h2 className={styles.title}>Message History</h2>
        <ul>
            <li className={styles.text}>Message history</li>
              </ul></>}
    </div>
  )
}
export default QuestionSidebar