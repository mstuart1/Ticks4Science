import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BasicPage } from "../GeneralStyles";
import SubmissionDataService from "../../services/submission";
import HoverCard from "../ui/hoverCard/HoverCard";
import styled from "styled-components";
import UserDataService from "../../services/users";
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "./actions";
import UserMgt from "./UserMgt";
import OutlineCard from "../ui/outlineCard/OutlineCard";
import SubCard from "./SubCard";
import EditUser from "./EditUser";
import OutlineFloatButton from "../ui/outlineFloatButton/OutlineFloatButton";
import RenderIf from '../../tools/RenderIf'

const ruTeal = theme.colors.ruTeal
const ruRed = theme.colors.ruRed

const Styles = {
  Input: styled.input`
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
    width: 250px;
    @media screen and (min-width: ${({ theme }) => theme.mobile}) {
      max-width: 800px;
    }
  `,

  Link: styled(Link)`
    text-decoration: none;
    color: black;
  `,
  Card: styled.div`
    margin: 1rem;
    padding: 1rem;
    width: 80vw;
    max-width: 900px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || "#000000"}20;
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
    justify-content: space-between;
    align-items: center;
    h3 {
      color: ${({ theme }) => theme.colors.grey3};
    }
  `,
};



const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState({});

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token.data);
  // console.log('token', token)

  useEffect(() => {
    let getData = async (token) => {
      return await SubmissionDataService.getAllSubm(token);
    };



    getData(token).then((response) => {
      // console.log(response.data.record)
      setData(response.data.record);
    });
  }, [token]);

  // console.log('data', data)

  const handleInputChange = (evt) => {
    let { value } = evt.target;
    // console.log(value)
    setQuery(value);
  };

  const handleInviteChange = (evt) => {
    // console.log(`invite is changing`)
    let info = evt.target;
    let value = info.type === "checkbox" ? info.checked : info.value;
    setInput({ ...input, [info.name]: value });
  };

  const handleUserInvite = async (evt) => {
    evt.preventDefault();
    if (!input.email) {
      alert("Please include an email");
    }
    let response = input.email && (await UserDataService.inviteUser(input));
    setInput({});
    // console.log(response.data)

    alert("User has been invited");
  };

  const handleLogout = () => {
    dispatch(removeToken());
    navigate("/");
  };

  // console.log('data', data)

  let filteredData = data?.filter((sub) => {
    if (query === "") {
      return null;
    } else if (parseInt(sub.id) === parseInt(query)) {
      return sub;
    } else {
      return null;
    }
  });

  let totalSubs = data?.length;
  let pendPhotos = data?.filter((sub) => sub.photosReviewed === null);
  let pendReceived = data?.filter(
    (sub) => sub.specimenReceived === null && sub.specimenRequested !== null
  );
  let pendIdentified = data?.filter(
    (sub) => sub.specimenReceived && sub.specimenIdentified === null
  );
  let totalIdent = data?.filter((sub) => sub.specimenIdentified);
  let notReq = data?.filter(
    (sub) =>
      sub.photosReviewed !== null &&
      sub.specimenIdentified === null &&
      sub.specimenRequested === null
  );

  let blockArray = [
    {
      filter: "totalSubs",
      text: "Total Submissions",
      number: totalSubs,
    },
    {
      filter: "pendPhotos",
      text: "Waiting for Photo Review",
      number: pendPhotos?.length,
    },

    {
      filter: "pendReceived",
      text: "Waiting for User to Mail Tick In",
      number: pendReceived?.length,
    },

    {
      filter: "pendIdentified",
      text: "Waiting for Team to Identify Mailed-In Tick",
      number: pendIdentified?.length,
    },

    {
      filter: "totalIdent",
      text: "Total Identified",
      number: totalIdent?.length,
    },
    { filter: "notReq", text: "Specimen Not Requested", number: notReq?.length },
  ];

  let blockElems = blockArray.map((block, i) => (
    <div
      key={i}
      style={{ cursor: "pointer" }}
      onClick={() => {
        return navigate("/admin/allSubs", {
          state: { filter: `${block.filter}`, limitMax: block.number },
        });
      }}
    >
      <OutlineCard width="245px" height="115px">
        <Styles.BlockDetail>
          <h3>{block.text}</h3>
          <h1>{block.number}</h1>
        </Styles.BlockDetail>
      </OutlineCard>
    </div>
  ));

  let subElem =
    filteredData &&
    filteredData.map((sub) => <SubCard item={sub} key={sub.id} />);



  return token?.length > 7 ? (
    <BasicPage.Text>
      <div>
        Hi,{" "}
        {user.firstName
          ? user.firstName
          : `you haven't set up your profile yet, click the button below to edit your profile.`}
      </div>

      {/* <BasicPage.Form> */}
      <Styles.Input
        placeholder="Find a specific tick number"
        type="search"
        onChange={handleInputChange}
      />
      {subElem}
      {/* </BasicPage.Form> */}

      <div>
        <Styles.BlockCont>{blockElems}</Styles.BlockCont>
        {/* will eventually navigate to route where download table renders */}
        <BasicPage.CardContainer>
          <OutlineFloatButton
            colors={{
              text: ruTeal,
              shadow: ruTeal,
              bg: ruTeal,
            }}
            handleClick={() => navigate("/admin/data")}
            text="View Data to Download"
            padding="2rem"
          />
          <RenderIf isTrue={user.editData}>
            <OutlineFloatButton
              colors={{
                text: ruRed,
                shadow: ruRed,
                bg: theme.colors.white,
              }}
              handleClick={() => navigate("/admin/deleted")}
              text="View Deleted Submissions"
              padding="2rem"
            />
            <OutlineFloatButton
              colors={{
                text: ruTeal,
                shadow: ruTeal,
                bg: theme.colors.white,
              }}
              handleClick={() => navigate("/admin/duplicates")}
              text="View Duplicate Submissions"
              padding="2rem"
            />
          </RenderIf>
          <OutlineFloatButton
            colors={{
              text: ruTeal,
              shadow: ruTeal,
              bg: theme.colors.white,
            }}
            handleClick={() => navigate("/admin/tickList")}
            text="Edit Tick Pathogens"
            padding="2rem"
          />
        </BasicPage.CardContainer>
        <Styles.BlockCont
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RenderIf isTrue={user.manageUsers}>
            <OutlineCard>
              <BasicPage.SectionTitle>
                Invite an Admin User
              </BasicPage.SectionTitle>
              <Styles.InputCont>
                <Styles.Input
                  type="email"
                  name="email"
                  value={input.email || ""}
                  placeholder="Email of new user"
                  onChange={(evt) => handleInviteChange(evt)}
                />
                <label style={{ margin: 0 }}>
                  Check box if this user can manage other users:
                  <input
                    type="checkbox"
                    name="manageUsers"
                    value={input.manageUsers}
                    onChange={(evt) => handleInviteChange(evt)}
                    style={{ padding: '1rem', margin: '1rem' }}
                  />
                </label>
                <Styles.InviteButton onClick={handleUserInvite}>
                  Invite
                </Styles.InviteButton>
              </Styles.InputCont>
            </OutlineCard>
            <UserMgt />
          </RenderIf>




          <EditUser />
        </Styles.BlockCont>
      </div>
      <div onClick={handleLogout} style={{ cursor: "pointer" }}>
        <HoverCard shadowColor={ruTeal} width="3rem" height="2rem">
          Logout
        </HoverCard>
      </div>
    </BasicPage.Text>
  )
    : <BasicPage.Text><h1>Please refresh your browser window</h1></BasicPage.Text>
};

export default Dashboard;
