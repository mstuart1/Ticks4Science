import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"
import { Link } from "react-router-dom"

const TickList = () => {

    const { isLoading, isError, data } = useAxios(TickDataService.getAllTicks)

    console.log(data)

    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly' }}>
            {data.map(item => (
                <Link to={`/admin/edit-tick-pathos/${item.id}`} key={item.id}>
                    {item.common} - {item.scientific}
                </Link>
            ))}
        </div>
    )
}
export default TickList