import React, { useCallback, useEffect, useState } from 'react'
import { BasicPage } from '../GeneralStyles'
import SubmissionDataService from '../../services/submission'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import SubCard from './SubCard';
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton';
import { useNavigate } from 'react-router-dom';

const Styles = {
  Input: styled.input`
    width: 80vw;

    @media screen and (min-width:${({ theme }) => theme.mobile}) {
        max-width: 800px;
      }
    `, 
    ButtonCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `,
}

const DuplicateSubs = () => {
  const navigate = useNavigate()
    const token = useSelector(state => state.token.data)
    const [data, setData] = useState([]);
    const [input, setInput] = useState("")

    const getData = useCallback( async () => {
        
        let response = await SubmissionDataService.getDuplicates(token)
        return(response.data.record)
      }, [token]);
      
    
      useEffect(() => {
        getData().then(response => {
            setData(response)
        })}, [getData])

        const handleInputChange = ({target}) => {
          let { value } = target;
          // console.log(value)
          setInput(value);
        };

        let filteredData = data.filter((sub) => {
          if (input === "") {
            return null;
          } else if (parseInt(sub.id) === parseInt(input)) {
            console.log('sub self', sub)
            return sub;
          } else if (parseInt(sub.duplicate) === parseInt(input)) {
            console.log('sub dupe', sub)
            return sub;
          }else {
            return null;
          }
        });

        let subElem =
    filteredData &&
    filteredData.map((sub) => <SubCard item={sub} key={sub.id} />);
        
      // console.log('data', data)
  return (
    <BasicPage.Text>
       <Styles.ButtonCont>
          <BorderlessFloatButton handleClick={() => navigate('/admin')} text="Back to Dashboard"/>
        </Styles.ButtonCont>
        <h3>Enter the number of the submission you'd like to review.</h3>
      <BasicPage.Form>
        <Styles.Input
          placeholder="submission id"
          type="search"
          onChange={handleInputChange}
        />
        {subElem}
      </BasicPage.Form>
      <p>If you need hints about which submissions have been marked as duplicates, go back to the dashboard and check out the "View Data To Download" button.</p>
      <p>If you aren't seeing all of the submissions in the duplicate group that you expected, they may have been deleted.  They would need to be un-deleted before they would show up here.  Check the "View Data To Download" to see the deleted and duplicate status of submissions.</p>
        
    </BasicPage.Text>
  )
}

export default DuplicateSubs