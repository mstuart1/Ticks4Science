import useAxios from "../../tools/useAxios";
import PathogenDataService from '../../services/pathogens'
import styled from "styled-components";
import OutlineCard from "../ui/outlineCard/OutlineCard";


const Styles = {
    PathosCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
};

const PathogenCard = ({ message = 'select all that tested positive', checkedPathogens = [], handleChange }) => {

    let { isError, isLoading, data: pathogens } = useAxios(PathogenDataService.getAll)

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
                    checked={checkedPathogens.length && (checkedPathogens.some((value) => value.id === patho.id) || "")}
                    onChange={handleChange}
                />
                <label htmlFor={patho.pathogen}>{patho.pathogen}</label>
            </Styles.PathosCont>
        ));

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error!</p>

    return (
        <OutlineCard width="300px">
            <h2>Pathogens</h2>
            <p>{message}</p>
            {pathogenElems}
        </OutlineCard>
    )
}
export default PathogenCard