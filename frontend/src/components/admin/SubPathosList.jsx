import styled from "styled-components"
import { theme } from "../../theme"
import { useEffect, useState } from "react"
import SubmissionDataService from "../../services/submission"
// import { useNavigate } from "react-router-dom"

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
  `,
    Container: styled.section`
  display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 900px;
  `,
    Title: styled.h1`
  text-align: center;
  `,
}


const SubPathosList = ({ sub }) => {

    const { id: subId, specimen: { pathogens: speciesPathos }, pathogens: subPathos } = sub

    // ** combine subPathos and speciesPathos to remove duplicates but include any new items
    const combinedList = [...new Set([...subPathos.map(item => item.id), ...speciesPathos.map(item => item.id)])]
    // ** are there any differences between the ids in the combined list and the subPathos list?
    const differenceList = combinedList.filter(item => !subPathos.map(item => item.id).includes(item))

    const [tableData, setTableData] = useState(subPathos)

    useEffect(() => {
        // ** create function to update pathos in sub
        const updateSubPathos = async (subId, pathogens) => {
            try {
                let response = await SubmissionDataService.updatePathos(subId, { pathogens })
                return (response.data.updatedSub)
            } catch (err) { console.log(err) }
        }
        // ** if there are any differences, update the subPathos list
        if (differenceList.length) {
            updateSubPathos(subId, speciesPathos).then(freshData => {
                console.log('fresh data', freshData)
                setTableData(freshData?.pathogens)
            })
        }
    }, [sub])

    const handleResult = async ({ target: { name: pathogenId, value: result } }) => {
        try {
            let response = await SubmissionDataService.updateResult(sub.id, { pathogenId, result })
            let { updatedSub } = response.data
            // console.log('handle result response', updatedSub)
            setTableData(updatedSub?.pathogens)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Styles.Container>
            <Styles.Title>Test Status</Styles.Title>
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
                        <tr key={item.id} >
                            <td >{item.pathogen}</td>
                            <td>{item.name}</td>
                            <td>{item.submission_pathogen.result}</td>
                            <td>
                                <select defaultValue={item.submission_pathogen.result} name={item.id} onChange={handleResult}>
                                    <option value="positive">Positive</option>
                                    <option value="negative">Negative</option>
                                    <option value="inconclusive">Inconclusive</option>
                                    <option value="pending">Pending</option>
                                    <option value="not testing">Not Testing</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Styles.Table >
        </Styles.Container >
    )
}
export default SubPathosList