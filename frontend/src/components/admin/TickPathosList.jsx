import useAxios from "../../tools/useAxios"
import PathogenDataService from "../../services/pathogens"
import TickDataService from "../../services/ticks"
import styled from "styled-components"
import { theme } from "../../theme"
import { BasicPage } from "../GeneralStyles"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Styles = {
    InputDiv: styled.div`
    display: flex;
    justify-content: center;
    input {
        padding: 0.5rem;
    }
    `,
    Table: styled.table`
  font-family: Arial, Helvetica, sans-serif;
  borderCollapse: collapse;
  width: 100%;
  td, th {
    border: 1px solid #ddd;
  padding: 0.8rem;
  text-align: center;
  }
  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}
 
  th {
   padding-top: 1.2rem;
   padding-bottom: 1.2rem;
   background-color: ${theme.colors.ruTeal}};
   color: white;
 }
 td {
    color: black;
    }
  `
}

const TickPathosList = () => {

    const { id: tickId } = useParams()

    const { isLoading: pathosLoading, isError: pathosError, data: pathosData } = useAxios(PathogenDataService.getAll)
    const { isLoading, isError, data } = useAxios(TickDataService.getTick, tickId)

    const [currentTick, setCurrentTick] = useState({})
    const [selected, setSelected] = useState(currentTick?.pathogens?.map(pathogen => pathogen.id) ?? [])

    useEffect(() => {
        setCurrentTick(data?.foundRecord ?? {})
        setSelected(data?.foundRecord?.pathogens?.map(pathogen => pathogen.id) ?? [])
    }, [data])

    const handlePathos = async (pathogenId) => {
        try {
            /** this is going to send one id, if that id is already in the list, it will remove it, if it is not in the list, it will add it */
            let response = await TickDataService.updatePathos(tickId, { pathogenId })
            setCurrentTick(response.data.updatedTick)
            if (selected.includes(pathogenId)) {
                setSelected(selected.filter(id => id !== pathogenId))
            } else {
                setSelected([...selected, pathogenId])
            }
        } catch (err) { console.log(err) }

    }

    if (pathosLoading) return <div><h1>Loading Pathogens...</h1></div>
    if (isLoading) return <div><h1>Loading Tick...</h1></div>
    if (pathosError) return <div><h1>Error retrieving pathogen list...</h1></div>
    if (isError) return <div><h1>Error retrieving tick...</h1></div>
    const { foundData: pathogens } = pathosData ?? {}

    return (
        <div style={{ display: "flex", flexDirection: 'column', width: '80vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BasicPage.LinkButton.LinkSpec to={'/admin'}>
                    <BasicPage.HoverCard>
                        <BasicPage.LinkButton.CardSpecial>
                            <span style={{ fontSize: '2rem' }}>Back to Dashboard</span>
                        </BasicPage.LinkButton.CardSpecial>
                    </BasicPage.HoverCard>
                </BasicPage.LinkButton.LinkSpec>
                <BasicPage.LinkButton.LinkSpec to={'/admin/tickList'}>
                    <BasicPage.HoverCard>
                        <BasicPage.LinkButton.CardSpecial>
                            <span style={{ fontSize: '2rem' }}>Back to Tick List</span>
                        </BasicPage.LinkButton.CardSpecial>
                    </BasicPage.HoverCard>
                </BasicPage.LinkButton.LinkSpec>
            </div>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Click on a pathogen to add or remove it from the tests run on {currentTick.scientific} - {currentTick.common}</span>
            <Styles.Table>
                <thead>
                    <tr>
                        <th>Pathogen Abbrv</th>
                        <th>Pathogen Name</th>
                        <th>Active Testing</th>
                    </tr>
                </thead>
                <tbody>
                    {pathogens?.map(pathogen => (
                        <tr onClick={() => handlePathos(pathogen.id)} key={pathogen.id} style={{ backgroundColor: selected?.includes(pathogen.id) && `#F5D36A` }}>
                            <td >{pathogen.pathogen}</td>
                            <td>{pathogen.name}</td>
                            <td>{selected?.includes(pathogen.id) ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </Styles.Table >
        </div >
    )
}
export default TickPathosList