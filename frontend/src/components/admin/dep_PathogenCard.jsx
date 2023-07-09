import useAxios from "../../tools/useAxios";
import PathogenDataService from '../../services/pathogens'
import styled from "styled-components";
import OutlineCard from "../ui/outlineCard/OutlineCard";
import { theme } from "../../theme";


const Styles = {
    PathosCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
    SaveBtn: styled.button`
    width: 100px; 
    padding: 1rem;
     color: white;
     background: ${theme.colors.ruRed};
     box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .18);
     border: none;
    `,

};

const PathogenCard = ({ message = 'select all that tested positive, you must hit the save button on this card to save the changes.', tick, handleChange }) => {

    let { isError, isLoading, data } = useAxios(PathogenDataService.getAll)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error!</p>

    let { foundData: pathogens } = data

    // todo add the list of current tick_Pathogen records to populate the checked boxes
    console.log('tick', tick.pathogens)

    const handleSave = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.currentTarget)
        // const formObject = Object.fromEntries(formData) // This gives us {Eewing: '6', Rpark: '9', BRBV: '14'}, we want the values {'6', "9", "14"}
        const values = [...formData.values()]
        console.log('Pathogen Card', values)
        handleChange(values)
    }

    // todo because of the way the checked attribute works, we need to change this to update the db on check change instead of all at once in bulk.
    let pathogenElems =
        pathogens?.length > 0 &&
        pathogens?.map((patho) => (
            <Styles.PathosCont key={patho.id}>
                <input
                    type="checkbox"
                    id={patho.pathogen}
                    name={patho.pathogen}
                    value={patho.id}
                    style={{ margin: "1rem" }}

                    checked={tick.pathogens.some((value) => value.id === patho.id) || ""}

                />
                <label htmlFor={patho.pathogen}>{patho.pathogen}</label>
            </Styles.PathosCont>
        ));

    return (
        <OutlineCard>
            <h2>Pathogens</h2>
            <p>{message}</p>
            <form onSubmit={handleSave}>
                {pathogenElems}
                <Styles.SaveBtn type='submit'>Save</Styles.SaveBtn>
            </form>
        </OutlineCard>
    )
}
export default PathogenCard