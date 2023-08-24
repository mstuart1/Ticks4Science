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

    const [subData, setSubData] = useState(sub)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        // ** create function to update pathos in sub
        const updateSubPathos = async (subId, pathogens) => {
            try {
                let response = await SubmissionDataService.updatePathos(subId, pathogens)
                return (response.data.updatedSub)
            } catch (err) { console.log(err) }
        }

        let submissionPathogens = subData?.pathogens ?? []// expect array
        let speciesPathogens = subData?.specimen?.pathogens ?? [] // expect array
        console.log('subData', subData)
        // ** if subData?.pathogens is empty, update it with subData.specimen?.pathogens
        // !! species should override submission unless there are test results
        if (submissionPathogens?.length !== speciesPathogens?.length) {
            console.log('update', submissionPathogens?.length, speciesPathogens?.length)
            updateSubPathos(subData.id, { pathogens: speciesPathogens }).then(data => {
                console.log('update pathogen response', data)
                setSubData(data)
                setTableData(data?.pathogens)
            })
        } else {
            // console.log('pathogens', submissionPathogens.length, speciesPathogens.length)
            setTableData(submissionPathogens)
        }
    }, [sub])

    const handleResult = async ({ target: { name: pathogenId, value: result } }) => {
        try {
            let response = await SubmissionDataService.updateResult(sub.id, { pathogenId, result })
            let { updatedSub } = response.data
            console.log('handle result response', updatedSub)
            setSubData(updatedSub)
            setTableData(updatedSub?.pathogens)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', width: '80vw', maxWidth: '900px' }}>
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
                        <tr key={item.id} >
                            <td >{item.pathogen}</td>
                            <td>{item.name}</td>
                            <td>{item.submission_pathogen.result}</td>
                            <td>
                                <select defaultValue={item.submission_pathogen.result} name={item.id} onChange={(evt) => handleResult(evt)}>
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