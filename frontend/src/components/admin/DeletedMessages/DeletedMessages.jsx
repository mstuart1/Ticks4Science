import React, { useCallback, useEffect, useState } from 'react'
import { BasicPage } from '../../GeneralStyles'
import MessageDataService from '../../../services/message'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import SubCard from '../SubCard';
import BorderlessFloatButton from '../../ui/borderlessFloatButton/BorderlessFloatButton';
import { useNavigate } from 'react-router-dom';
import styles from './DeletedMessages.module.css'

// const Styles = {
//   Input: styled.input`
//     width: 80vw;

//     @media screen and (min-width:${({ theme }) => theme.mobile}) {
//         max-width: 800px;
//       }
//     `,
//   ButtonCont: styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     `,
// }

const DeletedSubs = () => {
  const navigate = useNavigate()
  const token = useSelector(state => state.token.data)
  const [data, setData] = useState([]);
  const [input, setInput] = useState("")

  const getData = useCallback(async () => {

    let response = await MessageDataService.getDeleted(token)
    let {deletedMessages} = response.data
    return deletedMessages
  }, [token]);

  useEffect(() => {
    getData().then(response => {
      setData(response)
    })
  }, [getData])

  // let subElem =
  //   filteredData &&
  //   filteredData.map((sub) => <SubCard item={sub} key={sub.id} />);

  // console.log('data', data)
  return (
    <BasicPage.Text>
      {/* <Styles.ButtonCont> */}
        <BorderlessFloatButton handleClick={() => navigate('/admin')} text="Back to Dashboard" />
      <table>
        <thead>
          <tr>
            <th>Who Wrote it?</th>
            <th>When was it written?</th>
            <th>What did they say?</th>
            <th>Was it answered?</th>
            <th>Who deleted it?</th>
            <th>When was it deleted?</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (<tr>
<td>{item.role}</td>
            <td>{item.createdAt}</td>
            <td>{item.message}</td>
            <td>{item.answered}</td>
            <td>{item.deletedById}</td>
            <td>{item.deletedAt}</td>
</tr>))}

        </tbody>
      </table>

    </BasicPage.Text>
  )
}

export default DeletedSubs