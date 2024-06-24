import { useEffect, useState } from "react"
import styles from './SubPathosList.module.css'
import SubmissionDataService from "../../../services/submission"

const SubPathosList = ({ sub }) => {

    const { id: subId, specimen: { pathogens: speciesPathos }, pathogens: subPathos } = sub
    // console.log('sub', sub)
    // console.log('subPathos', subPathos)
    // console.log('speciesPathos', speciesPathos)
    // ** combine subPathos and speciesPathos to remove duplicates but include any new items
    const combinedList = [...new Set([...subPathos.map(item => item.id), ...speciesPathos.map(item => item.id)])]
    // ** are there any differences between the ids in the combined list and the subPathos list?
    const differenceList = combinedList.filter(item => !subPathos.map(item => item.id).includes(item))
    
    console.log('combined list of species pathogens and pathogens already assigned to the submission', combinedList)
    console.log('if difference list length is 0, no update will be made to table', differenceList)
    
    
    const [tableData, setTableData] = useState(subPathos)

    useEffect(() => {
        // ** create function to update pathos in sub
        const updateSubPathos = async (subId, pathogens) => {
            try {
                let response = await SubmissionDataService.updatePathos(subId, { pathogens })
                return (response.data.updatedSub)
            } catch (err) { console.log(err) }
        }
        // ** if there are any differences, update the subPathos list with the species pathogens
        if (differenceList.length) {
            // console.log('calling updateSubPathos')
            updateSubPathos(subId, speciesPathos).then(freshData => {
                // console.log('fresh data', freshData)
                setTableData(freshData?.pathogens)
            })
        }
    }, [differenceList.length, speciesPathos, subId])

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
        <section className={styles.container}>
            <h1 className={styles.title}>Test Status</h1>
            <table className={styles.table}>
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
            </table >
        </section >
    )
}
export default SubPathosList