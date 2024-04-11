import SubmissionDataService from "../../../services/submission"
import styles from './Notes.module.css'
import { useNavigate } from 'react-router-dom'

const NotesCard = ({ notes, id, user }) => {

    console.log('notes', notes.data)
    console.log('id', id)
    console.log('user', user)
    const navigate = useNavigate()
    const handleNotes = async (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.currentTarget)
        const formObject = Object.fromEntries(formData)
        let data
        console.log('notes', notes)
        if (notes){
            
            data = {notes: {data: [...notes.data, {date: new Date(), text: formObject.notes, user: `${user.firstName} ${user.lastName}`}]}}
        } else {
            data = { notes: { data: [{ date: new Date(), text: formObject.notes, user: `${user.firstName} ${user.lastName}` }] } }
        }
        if (formObject.notes.length > 0) {
            let response = await SubmissionDataService.updateSub(data, id);
            console.log("updated", response.data);
        } 
        navigate(0, { replace: true })
        return
    }
    return (
        <div className={styles.outlineCard}>
            <h2 className={styles.title}>Lab Notes</h2>
            {/* {!!notes && <p>{notes}</p>} */}
            <form onSubmit={handleNotes}>
                <textarea className={styles.textarea} defaultValue='' id="notes" name="notes" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
                <br />
                <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
            </form>
            { notes?.data?.map((note, index) => (<div key={index} className={styles.messageDiv}><div className={styles.text}><span className={styles.date}>{new Date(note.date).toString()} from {note.user}:</span><br /> <span className={styles.highlight}>{note.text}</span></div>
               
            </div>))}
        </div>
    )
}
export default NotesCard