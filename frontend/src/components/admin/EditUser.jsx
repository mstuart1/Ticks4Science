import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createInputElems } from '../../tools/createElemFunc';
import HoverCard from '../ui/hoverCard/HoverCard';
import { updateUserReq } from './actions';

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
        dispatch(updateUserReq(input))
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