import styled from "styled-components"
import { theme } from "../../theme"
import { useEffect, useState } from "react"
import SubmissionDataService from "../../services/submission"
import { useNavigate } from "react-router-dom"


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

const SubPathosList = ({ sub }) => {

    const navigate = useNavigate()

    const [tableData, setTableData] = useState([])

    useEffect(() => {

        const updateSubPathos = async (subId, pathogens) => {
            try {
                let response = await SubmissionDataService.updatePathos(subId, pathogens)
                console.log('response', response.data)
                return (response.data.updatedSub)


            } catch (err) { console.log(err) }
        }

        if (!sub?.pathogens?.length) {
            console.log('update', sub.specimen.pathogens)
            updateSubPathos(sub.id, { pathogens: sub.specimen.pathogens })
            //!! refreshing the page so that it pulls fresh data from the database, for some reason the result of the updated sub doesn't contain the updated pathogens array
            navigate(0)
        } else {
            setTableData(sub.pathogens)
        }
    }, [sub])

    const handleResult = () => {
        console.log('todo create a service route to handle the test results')
    }


    // const handlePathos = async (pathogenId) => {
    //     try {
    //         /** this is going to send one id, if that id is already in the list, it will remove it, if it is not in the list, it will add it */
    //         let response = await TickDataService.updatePathos(tickId, { pathogenId })
    //         setCurrentTick(response.data.updatedTick)
    //         if (selected.includes(pathogenId)) {
    //             setSelected(selected.filter(id => id !== pathogenId))
    //         } else {
    //             setSelected([...selected, pathogenId])
    //         }
    //     } catch (err) { console.log(err) }

    // }

    // if (pathosLoading) return <div><h1>Loading Pathogens...</h1></div>
    // if (isLoading) return <div><h1>Loading Tick...</h1></div>
    // if (pathosError) return <div><h1>Error retrieving pathogen list...</h1></div>
    // if (isError) return <div><h1>Error retrieving tick...</h1></div>
    // const { foundData: pathogens } = pathosData ?? {}

    console.log('sub', sub)

    return (
        <div style={{ display: "flex", flexDirection: 'column', width: '80vw' }}>
            <h1 style={{ textAlign: 'center' }}>Test Status</h1>
            <Styles.Table>
                <thead>
                    <tr>
                        <th>Pathogen Abbrv</th>
                        <th>Pathogen Name</th>
                        <th>Test Status</th>
                        <th>Edit Result</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map(item => (
                        <tr
                            // onClick={() => handlePathos(item.id)} 
                            key={item.id} >
                            <td >{item.pathogen}</td>
                            <td>{item.name}</td>
                            <td>{item.submission_pathogen.result}</td>
                            <td>
                                <select onChange={handleResult}>
                                    <option value="positive">Positive</option>
                                    <option value="negative">Negative</option>
                                    <option value="inconclusive">Inconclusive</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Styles.Table >
        </div >
    )
}
export default SubPathosList