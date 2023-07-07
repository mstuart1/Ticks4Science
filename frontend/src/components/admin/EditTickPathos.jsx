import { useParams } from "react-router-dom"
import { BasicPage } from "../GeneralStyles"
import PathogenCard from "./PathogenCard"
import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"

const EditTickPathos = () => {

    const { id } = useParams()

    const { isLoading, isError, data } = useAxios(TickDataService.getTick, id)

    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>

    const { foundRecord: tick } = data

    const handleChange = async values => {
        try {

            let response = await TickDataService.updatePathos(values, id)
            console.log('EditTickPathos', response.data)

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <BasicPage.Text>
            <PathogenCard message={`Select which tests will always be run for ${tick?.common}.  You must hit the save button in order to save these changes.`} tick={tick} handleChange={handleChange} />
        </BasicPage.Text>
    )
}
export default EditTickPathos