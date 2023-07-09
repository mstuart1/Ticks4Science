import { Link, useParams } from "react-router-dom"
import { BasicPage } from "../GeneralStyles"
import PathogenCard from "./PathogenCard"
import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"
import TickPathosList from "./TickPathosList"

const EditTickPathos = () => {

    const { id } = useParams()

    // const { isLoading, isError, data } = useAxios(TickDataService.getTick, id)

    // if (isLoading) return <div><h1>Loading...</h1></div>
    // if (isError) return <div><h1>Error...</h1></div>

    // const { foundRecord: tick } = data

    return (
        <BasicPage.Text>
            <TickPathosList id={id} />
        </BasicPage.Text>
    )
}
export default EditTickPathos