import React from 'react'
import styled from 'styled-components'
import { CSVLink } from "react-csv";
import OutlineFloatButton from "../ui/outlineFloatButton/OutlineFloatButton";
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton';
import { theme } from '../../theme';

 const Styles = {
   Wrapper: styled.div`
   padding: 2rem;
   display: flex;
flex-direction: column;
   `,
   ButtonCont: styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   `,
   TableContainer: styled.div`

   table {
     font-family: sans-serif;
     border-collapse: collapse;
     width: 100%;
   }
 
   table td,
   table th {
     border: 1px solid #ddd;
     padding: 1rem;
   }
 
   table tr:nth-child(even) {
     background-color: #f5f3f2;
   }
 
   table tr:hover {
     background-color: #e5e2e0;
   }
 
   table th {
     padding-top: 1.5rem;
     padding-bottom: 1.5rem;
     text-align: center;
     background-color: #137b80;
     color: white;
   }
 `

 }

const DownloadTable = () => {
  // get the data from the backend
  
  // define the columns
  let columns = []
  // reduce the data to what will be visible in the table view
  let editedData
  // map through the rows as elems
  let tableElems
  let date = new Date()
  let dateString = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()} `
  
    return (
    <Styles.Wrapper>
      <Styles.ButtonCont>
      {/* <CSVLink data={editedData} filename={`ticksWebsiteData-${dateString}.csv`}> */}
      <OutlineFloatButton
          colors={{
            text: theme.colors.ruTeal,
            shadow: theme.colors.ruTeal,
            bg: theme.colors.ruTeal,
          }}
          
          text="Download Data"
          padding="2rem"
        />
      {/* </CSVLink> */}
      <BorderlessFloatButton text='Back to Dashboard'/>
      
      </Styles.ButtonCont>
      <p>
        Additional data have been excluded from this view for screen space but are
        included in the download.
      </p>
      <Styles.TableContainer>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableElems}
          </tbody>
        </table>
      </Styles.TableContainer>
    </Styles.Wrapper>
  );

}

export default DownloadTable
