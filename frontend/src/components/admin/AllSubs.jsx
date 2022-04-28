import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BasicPage } from "../GeneralStyles";
import SubmissionDataService from '../../services/submission'
import HoverCard from '../ui/hoverCard/HoverCard'
import styled from "styled-components";
// import { getOrgDataRequest } from "./actions";
// import { PageContainer} from '../styles/Common.styled'
// import { useDispatch, useSelector } from "react-redux";
// import { CreateButton } from "../dataSources/DataSource.styled";
// import { Instructions } from "./Orgs.styled";
// import OrgTable from "./OrgTable"

const Styles = {
    Input: styled.input`
    width: 80vw;

    @media screen and (min-width:${({ theme }) => theme.mobile}) {
        max-width: 800px;
      }
    `,
    Link: styled(Link)`
    text-decoration: none;
    color: black;
    `,
}
// TODO instead of search bar, use filtering buttons to get all, need photo review, waiting to receive tick, waiting for identification, identified - search by species

const AllSubs = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        let getData = async () => {
            setIsLoading(true)
         return await SubmissionDataService.getAllSubm();
        }
        
        getData().then(response => {
          // console.log(response.data.record)
          setData(response.data.record)
          setIsLoading(false)
        })
        
        
      }, [])

    // const handleInputChange = evt => {
    // let {value} = evt.target
    // // console.log(value)
    // setQuery(value)
    // }

      let filteredData = data.filter(item => {
      
    if (query === "") {
      return item
    } else if (item.toLowerCase().includes(query.toLowerCase())) {
      // returns filtered array
      return item;
    } else {
        return item
    }
  });

  let cardElems = filteredData.map(item => (
        <Styles.Link key={item.id} to={`/admin/processTick/${item.id}`} state={{tick: item}}>
        <HoverCard >
            <div>
            <p>ID: {item.id}</p>
            <p>Date Submitted: {item.createdAt&& item.createdAt.substring(0,10)}</p>
            <p>Photos Reviewed: {item.photosReviewed&& item.photosReviewed.substring(0,10)}</p>
            <p>Specimen Requested: {item.specimenRequested&& item.specimenRequested.substring(0,10)}</p>
            <p>Specimen Received: {item.specimenReceived&& item.specimenReceived.substring(0,10)}</p>
            <p>Specimen Identified: {item.specimenIdentified&& item.specimenIdentified.substring(0,10)}</p>
            </div>
        </HoverCard>
        </Styles.Link>
    ))

    // console.log(cardElems)

  return   (
    <BasicPage.Text>
        {/* <BasicPage.Form> */}
            
        {/* <Styles.Input style={{width: '80vw'}} placeholder="Find a specific tick number" type='search' onChange={handleInputChange}/>
        </BasicPage.Form> */}
         
        {isLoading 
        ? (<div>Loading...</div>) 
        : (
        <div>{cardElems}</div>
            
        
        )}
    </BasicPage.Text>
  )
}

export default AllSubs




//   const navigate= useNavigate();
  


//   return (
//     <PageContainer>
//       <CreateButton onClick={() => navigate('/orgs/create')}>
//           New Org
//       </CreateButton>
//     <Instructions>
//     <p><strong>To create a new datasource request</strong>, first find the organization and click on the id number to select it.</p>
//     </Instructions>

//     </PageContainer>
//   );
// };


