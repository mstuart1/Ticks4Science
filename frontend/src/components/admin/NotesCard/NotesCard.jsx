import SubmissionDataService from "../../../services/submission"
import OutlineCard from "../../ui/outlineCard/OutlineCard"
import styles from './notes.module.css'

const NotesCard = ({ notes, id }) => {
    const handleNotes = async (evt) => {
        const formData = new FormData(evt.currentTarget)
        formData.append('id', id)
        const formObject = Object.fromEntries(formData)
        await SubmissionDataService.updateSub(formObject, id);
        // return
    }
    return (
        <OutlineCard style={{ justifyContent: 'flex-start' }} width="30rem">
            <h2 className={styles.title}>Notes</h2>
            {!!notes && <p>{notes}</p>}
            <form onSubmit={handleNotes}>
                <textarea className={styles.textarea} defaultValue='' id="notes" name="notes" rows="4" cols="30" placeholder="Drag the bottom right corner to create more space if needed."></textarea>
                <br />
                <button className={styles.button} type="submit" value="Submit" ><span>Submit</span></button>
            </form>
        </OutlineCard>
    )
}
export default NotesCard