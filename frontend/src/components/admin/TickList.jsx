import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"

const TickList = () => {

    const { isLoading, isError, data } = useAxios(TickDataService.getAllTicks)

    console.log(data)

    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>

    return (
        <div>A list of ticks to select to edit, currently can only edit pathogen list</div>
    )
}
export default TickList