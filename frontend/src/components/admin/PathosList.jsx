import useAxios from "../../tools/useAxios"
import PathogenDataService from "../../services/pathogens"
import styled from "styled-components"
import { theme } from "../../theme"
import { useState } from "react"
import { BasicPage } from "../GeneralStyles"

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

const PathosList = () => {


    const { isLoading, isError, data } = useAxios(PathogenDataService.getAll)
    const [editMode, setEditMode] = useState(null)
    const [input, setInput] = useState({})

    const handleSave = () => {
        // todo: create a way to update pathogens
        // todo: add a column to the pathogen table for name
        console.log('todo: create a way to update pathogens')
        setEditMode(null)
    }

    const handleAdd = () => {
        //todo: create a way to add pathogens
        console.log('todo: create a way to add pathogens')
    }

    const handleDelete = () => {
        // todo: create a way to delete pathogens
        // todo: show a modal to confirm delete
        console.log('todo: create a way to delete pathogens')
    }

    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>
    const { foundData: pathogens } = data ?? {}

    return (
        <div style={{ display: "flex", flexDirection: 'column', width: '80vw' }}>
            <BasicPage.LinkButton.LinkSpec to={'/admin'}>
                <BasicPage.HoverCard>
                    <BasicPage.LinkButton.CardSpecial>
                        <span style={{ fontSize: '2rem' }}>Back to Dashboard</span>
                    </BasicPage.LinkButton.CardSpecial>
                </BasicPage.HoverCard>
            </BasicPage.LinkButton.LinkSpec>
            <Styles.Table>
                <thead>
                    <tr>
                        <th>Pathogen Abbrv</th>
                        <th>Pathogen Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pathogens?.map(pathogen => (
                        <tr key={pathogen.id} style={{ backgroundColor: editMode === pathogen.id && `#F5D36A` }}>
                            {editMode === pathogen.id
                                ? <td><Styles.InputDiv>
                                    <input type='text' name="pathogen" value={input.pathogen ?? pathogen.pathogen} onChange={(e) => setInput({ ...input, pathogen: e.target.value })} />

                                </Styles.InputDiv></td>
                                : <td >{pathogen.pathogen}</td>}
                            <td>{pathogen.name}</td>
                            {
                                editMode === pathogen.id ?
                                    <td style={{ backgroundColor: `#52A2A9` }} onClick={handleSave}>Save</td>
                                    : <td onClick={() => setEditMode(pathogen.id)}>Edit</td>
                            }
                            <td style={{ color: '#8E0D18' }} onClick={handleDelete}>Delete</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" onClick={handleAdd}>Add Pathogen</td>

                    </tr>
                </tbody>
            </Styles.Table >
        </div>
    )
}
export default PathosList