import { useParams } from "react-router-dom"
import { BasicPage } from "../GeneralStyles"
import PathogenCard from "./PathogenCard"
import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"

const EditTickPathos = () => {

    const { id } = useParams()

    const { isLoading, isError, data } = useAxios(TickDataService.getTick, id)

    const tickPathogens = []




    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>

    console.log(data)
    const handleChange = (e) => { }

    return (
        <BasicPage.Text>
            <PathogenCard message="select which tests will always be run for this species" checkedPathogens={tickPathogens} handleChange={handleChange} />
        </BasicPage.Text>
    )
}
export default EditTickPathos