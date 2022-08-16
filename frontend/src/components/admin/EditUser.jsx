import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createInputElems } from '../../tools/createElemFunc';
import HoverCard from '../ui/hoverCard/HoverCard';
import { updateUserReq } from './actions';
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton'
import {theme} from '../../theme'
import UserDataService from '../../services/users'

let ruRed = theme.colors.ruRed

const Styles = {
    InputCont: styled.div`
    display: flex;
    flex-direction: column;   
    align-items: flex-end;
    justify-content: center;
    input {
        margin: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }
    `,
}

const EditUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token.data)

    let initialState = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }
    
    const [showEdit, setShowEdit] = useState(false)
    const [input, setInput] = useState(initialState);
    
    const toggleEdit = () => setShowEdit(!showEdit);

    const handleEdit = () => {
        dispatch(updateUserReq(input, token))
        toggleEdit()
    }

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        // console.log(name, value, type, checked);
        setInput((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleReset = async () => {
      try {
        let response = await UserDataService.resetPassword({email: user.email});
        console.log(response.data)
        alert('An email has been sent with a link to reset your password. This email looks like the original invitation email but will work to change your password.')
      } catch (err) {
        console.log(err.message)
        alert('An error occurred while trying to send the email to reset your password')
      }
      
    }

    const inputArray = [
        {
          id: 1,
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true,
          placeholder: 'Given Name',
        },
        {
          id: 2,
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true,
          placeholder: 'Family Name',
        },
        {
          id: 3,
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'Email address',
        },
    ]

    const inputElems = createInputElems(inputArray, handleChange, input)

  return (
    <div>
    <div onClick={toggleEdit} style={{cursor: 'pointer'}}>
    <HoverCard padding='1rem 2rem' >
    <span style={{ fontWeight: 'bold'}}>{showEdit ? "Close Profile Editor Without Saving" : "Edit Your Profile"}</span>
    </HoverCard>
  </div>
  {showEdit && (
    <Styles.InputCont>
 {inputElems}
 <button style={{padding: '1rem 2rem', borderRadius: '0.5rem', margin: '1rem'}} onClick={handleReset}>Change Password</button>
  <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
    
      <div onClick={handleEdit}>
      <HoverCard padding='1rem 2rem' bgColor='#00626d'  >
    <span style={{ fontWeight: 'bold', color: '#f2f2f2'}}>Save Changes</span>
      </HoverCard>
      </div>
  </div>
  </Styles.InputCont>
)}
</div>
  )
}

export default EditUser