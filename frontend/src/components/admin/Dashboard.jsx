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
import SubCard from "./SubCard";
import EditUser from "./EditUser";

// import { getOrgDataRequest } from "./actions";
// import { PageContainer} from '../styles/Common.styled'
// import { useDispatch, useSelector } from "react-redux";
// import { CreateButton } from "../dataSources/DataSource.styled";
// import { Instructions } from "./Orgs.styled";
// import OrgTable from "./OrgTable"

const Styles = {
  Input: styled.input`
    // width: 80vw;
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
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    `,
  InviteButton: styled.button`
    width: 300px; 
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    cursor: pointer;
    `,
  InputCont: styled.div`
      // height: 200px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    `,
  BlockCont: styled.div`
    display: flex;
    flex-wrap: wrap;
    
    justify-content: center;
    `,
  BlockDetail: styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      color: ${({ theme }) => theme.colors.grey3};
    }
    `,

}

const Dashboard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [data, setData] = useState([])
  const [query, setQuery] = useState('');
  const [input, setInput] = useState({});


  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token.data)


  useEffect(() => {
    let getData = async (token) => {

      return await SubmissionDataService.getAllSubm(token);
    }

    getData(token).then(response => {
      // console.log(response.data.record)
      setData(response.data.record)

    })


  }, [token])

  const handleInputChange = evt => {
    let { value } = evt.target
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

  let filteredData = data.filter(sub => {
    if (query === "") {
      return null
    } else if (parseInt(sub.id) === parseInt(query)) {
      return sub
    } else {
      return null
    }
  })

  let totalSubs = data.length;
  let pendPhotos = data.filter(sub => sub.photosReviewed === null)
  let pendReceived = data.filter(sub => sub.specimenReceived === null && sub.specimenRequested !== null)
  let pendIdentified = data.filter(sub => sub.specimenReceived && sub.specimenIdentified === null);
  let totalIdent = data.filter(sub => sub.specimenIdentified)



  let blockArray = [
    { 
      filter: "totalSubs", 
      text: 'Total Submissions', 
      number: totalSubs },
    { filter: "pendPhotos",
     text: 'Waiting for Photo Review',
     number: pendPhotos.length },

    { filter: "pendReceived",
     text: 'Waiting for User to Mail Tick In',
     number: pendReceived.length },

    { filter: "pendIdentified",
     text: 'Waiting for Team to Identify Mailed-In Tick',
     number: pendIdentified.length },

    { filter: "totalIdent",
     text: 'Total Identified',
     number: totalIdent.length },
  ]

  let blockElems = blockArray.map((block, i) => (
    <div key={i} style={{cursor: 'pointer'}} onClick={() => {
      
      return (navigate("/admin/allSubs", {state:{filter: `${block.filter}`, limitMax: block.number}}))}}>
    <OutlineCard >
      <Styles.BlockDetail>
        <h3>{block.text}</h3>
        <h1>{block.number}</h1>
      </Styles.BlockDetail>
    </OutlineCard>
    </div>
  ))


  let subElem = filteredData && filteredData.map(sub => (
    <SubCard item={sub} key={sub.id}/>
  ))

  return (
    <BasicPage.Text>
      <div>Hi, {" "}
        {user.firstName ? user.firstName : (
        `you haven't set up your profile yet, click the button below to edit your profile.`
      )}
      </div>

      <BasicPage.Form>

        <Styles.Input placeholder="Find a specific tick number" type='search' onChange={handleInputChange} />
        {subElem}
      </BasicPage.Form>


      <div>
{/* 
        <InternalLinkFloatButton colors={{ text: 'white', bg: theme.colors.ruTeal }} padding="1rem 2rem" text="View Submissions" to='/admin/allSubs' /> */}
        <h4 style={{textAlign: 'left'}}> • You can now click on the blocks to see filtered lists of all of the submissions.</h4>
        <h4 style={{textAlign: 'left'}}> • You can now delete submissions.</h4>
        <Styles.BlockCont>
          {blockElems}
        </Styles.BlockCont>

        <Styles.BlockCont style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        {user.manageUsers && (
          <OutlineCard>
            <BasicPage.SectionTitle>Invite an Admin User</BasicPage.SectionTitle>
            <Styles.InputCont>
              <Styles.Input type='email' name='email' value={input.email || ''} placeholder='Email of new user' onChange={(evt) => handleInviteChange(evt)} />
              <label style={{ margin: 0 }}>Check box if this user can manage other users:
                <input type='checkbox' name='manageUsers' value={input.manageUsers} onChange={(evt) => handleInviteChange(evt)} />
              </label>
              <Styles.InviteButton onClick={handleUserInvite}>Invite</Styles.InviteButton>
            </Styles.InputCont>

          </OutlineCard>
        )}
        <UserMgt />
     <EditUser/>
        </Styles.BlockCont>


      </div>
      <div onClick={handleLogout} style={{cursor: "pointer"}}>
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





