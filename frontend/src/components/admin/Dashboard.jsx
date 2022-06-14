import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BasicPage } from "../GeneralStyles";
import SubmissionDataService from '../../services/submission'
import HoverCard from '../ui/hoverCard/HoverCard'
import styled from "styled-components";
import UserDataService from '../../services/users'
import InternalLinkFloatButton from "../ui/internalLinkFloatButton/InternalLinkFloatButton";
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "./actions";
import UserMgt from "./UserMgt";
import OutlineCard from "../ui/outlineCard/OutlineCard";

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
    Card: styled.div`
    margin: 1rem;
    padding: 1rem ; 
    width: 80vw;
    max-width: 900px;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    `,
    InviteButton: styled.button `
    width: 300px; 
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    `,
    InputCont: styled.div`
      height: 200px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    `,
}
// TODO instead of search bar, use filtering buttons to get all, need photo review, waiting to receive tick, waiting for identification, identified - search by species

const Dashboard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [input, setInput] = useState({});
    
    
    const user = useSelector(state => state.user)
    
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

    const handleInputChange = evt => {
    let {value} = evt.target
    // console.log(value)
    setQuery(value)    
    }

    const handleInviteChange = (evt) => {
      // console.log(`invite is changing`)
      let info = evt.target;
      let value = info.type === "checkbox" ? info.checked : info.value;
      setInput({ ...input, [info.name]: value });
  };

    const handleUserInvite = async evt => {
      evt.preventDefault()
      if (!input.email) {
        alert('Please include an email')
      }
      let response = input.email && await UserDataService.inviteUser(input)
      setInput({})
      // console.log(response.data)
      if (response.data.data === 'ALREADY_EXISTED') {
        alert('User was already in the system, no email sent')
      } else {
        alert('User has been invited')  
      }
    }

    const handleLogout = () => {
      dispatch(removeToken())
      navigate('/')
    }

   let  filteredData =  data.filter(sub => sub.id === query)
   let  subElem = filteredData.length > 0 && filteredData.map(item => (
      <Styles.Link key={item.id} to={`/admin/processTick/${item.id}`} state={{tick: item}}>
      <OutlineCard >
          <div>
          ID: {item.id}<br/>
          Date Submitted: {item.createdAt&& item.createdAt.substring(0,10)}<br/>
          Photos Reviewed: {item.photosReviewed && item.photosReviewed.substring(0,10)}<br/>
          Specimen Requested: {item.specimenRequested && item.specimenRequested.substring(0,10)}<br/>
          Specimen Received: {item.specimenReceived && item.specimenReceived.substring(0,10)}<br/>
          Specimen Identified: {item.specimenIdentified && item.specimenIdentified.substring(0,10)}<br/>
          Species: {item.tickId && item.tick.scientific}<br/>
          </div>
      </OutlineCard>
      </Styles.Link>
  ))
    console.log(filteredData)
  return   (
    <BasicPage.Text>
      <div>Hi, {user.firstName ? user.firstName :  (
        `you haven't set up your profile yet`
      )}</div>
     
        <BasicPage.Form>
            
         <Styles.Input placeholder="Find a specific tick number" type='search' onChange={handleInputChange}/>
         {query.length > 0 && subElem}
        </BasicPage.Form> 
         
        
        <div>
         
           <InternalLinkFloatButton colors={{text: 'white', bg: theme.colors.ruTeal }} padding="1rem 2rem" text="View Submissions" to='/admin/allSubs'/>
          

           {user.manageUsers && (
             <OutlineCard>
             <BasicPage.SectionTitle>Invite an Admin User</BasicPage.SectionTitle>
             <Styles.InputCont>
             <Styles.Input type='email' name='email' value={input.email || ''} placeholder='Email of new user' onChange={(evt) => handleInviteChange(evt)} />
           <label style={{margin: 0}}>Check box if this user can manage other users:
             <input type='checkbox' name='manageUsers' value={input.manageUsers} onChange={(evt) => handleInviteChange(evt)} />
           </label>
           <Styles.InviteButton   onClick={handleUserInvite}>Invite</Styles.InviteButton>
           </Styles.InputCont>
             
              </OutlineCard>
           )}
            <UserMgt/>

          
          
          </div>
          <div onClick={handleLogout}>
           <HoverCard 
           shadowColor={theme.colors.ruTeal}
           width='3rem'
           height='2rem'
           >Logout</HoverCard>
           </div>
        
        
    </BasicPage.Text>
  )
}

export default Dashboard





