import React, { useState } from 'react'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'
import BorderlessInput from '../ui/borderlessInput/BorderlessInput'

const Styles = {
    Input: styled.input`
    font-size: 1.4rem;
    border: none;
    -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ colors }) => colors.bg};
  color: ${({ colors }) => colors.text};
  padding: 2rem 4rem;
  border-radius: 3px;
  margin: 2rem 0;
    `
}

const AddEditTick = () => {


    const [input, setInput] = useState({})

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        // console.log(name, value, type, checked);
        setInput((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = evt => {
        evt.preventDefault()

    }

    return (
        <BasicPage.Text>
            <BorderlessInput onChange={handleChange} type='text' name='scientific' value={input.scientific || ''} placeholder='Scientific Name' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='common' value={input.common || ''} placeholder='Common Name(s)' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='colors' value={input.colors || ''} placeholder='Appearance - Colors' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='shape' value={input.shape || ''} placeholder='Appearance - Shape' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='hosts' value={input.hosts || ''} placeholder='Hosts' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='habitat' value={input.habitat || ''} placeholder='Habitat' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='njLocations' value={input.njLocations || ''} placeholder='NJ Locations' errorText='' />
            <BorderlessInput onChange={handleChange} type='text' name='larvaeActive' value={input.larvaeActive || ''} placeholder='Larvae - When active?' errorText='' />
            <Styles.Input onChange={handleChange} type='text' name='larvaeFeed' value={input.larvaeFeed || ''} placeholder='larvaeFeed' />
            <Styles.Input onChange={handleChange} type='text' name='nymphActive' value={input.nymphActive || ''} placeholder='nymphActive' />
            <Styles.Input onChange={handleChange} type='text' name='nymphFeed' value={input.nymphFeed || ''} placeholder='nymphFeed' />
            <Styles.Input onChange={handleChange} type='text' name='adultActive' value={input.adultActive || ''} placeholder='adultActive' />
            <Styles.Input onChange={handleChange} type='text' name='adultFeed' value={input.adultFeed || ''} placeholder='adultFeed' />
            <button onClick={handleSave}>Save</button> 
        </BasicPage.Text>

    )
}

export default AddEditTick