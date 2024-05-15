import React, { useCallback, useEffect, useState } from 'react'
import MessageDataService from '../../../services/message'
import { useSelector } from 'react-redux'
import BorderlessFloatButton from '../../ui/borderlessFloatButton/BorderlessFloatButton';
import { useNavigate } from 'react-router-dom';
import styles from './DeletedMessages.module.css'

const DeletedSubs = () => {
  const navigate = useNavigate()
  const token = useSelector(state => state.token.data)
  const [data, setData] = useState([]);

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

  return (
    <section className={styles.pageCont}>
        <BorderlessFloatButton handleClick={() => navigate('/admin')} text="Back to Dashboard" />
      <table>
        <thead>
          <tr>
            <th>Who Wrote it?</th>
            <th>When was it written?</th>
            <th>What did they say?</th>
            <th>Who deleted it?</th>
            <th>When was it deleted?</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (<tr key={item.id}>
<td>{item.role === 'admin' ? `${item.admin.firstName} ${item.admin.lastName}` : 'website user' }</td>
            <td>{item.createdAt}</td>
            <td>{item.message}</td>
            <td>{item.deletedBy.firstName} {item.deletedBy.lastName}</td>
            <td>{item.deletedAt}</td>
</tr>))}

        </tbody>
      </table>
    </section>
  )
}

export default DeletedSubs