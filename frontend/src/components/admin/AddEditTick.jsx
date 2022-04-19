import React, { useEffect, useState } from 'react'
import { theme } from '../../theme'
import { BasicPage } from '../GeneralStyles'
import BorderlessInput from '../ui/borderlessInput/BorderlessInput'
import TickDataService from '../../services/ticks'
import { Navigate, useParams } from 'react-router-dom'

const AddEditTick = () => {
    let {id} = useParams()

    const [input, setInput] = useState({})

    useEffect(() => {
        let getData = async () =>
          await TickDataService.getTick(id);
    
        getData().then(response => {
          console.log(response.data.record)
          setInput(response.data.record)
        })
      }, [id])

    

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        // console.log(name, value, type, checked);
        setInput((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = async evt => {
        try {
            evt.preventDefault()
            if (id) {
            await TickDataService.updateForm(input, id)
            } else {
                
            let response = await TickDataService.submitForm(input);
            id = response.data.data.id
            }
            
            setInput({})
            Navigate(`/ticks/${id}`)
        } catch(err) {
            console.log(err.message)
        }
    }
    
    let inputArray = [
        {id: 1, placeholder: 'Scientific Name', name: 'scientific', value: input.scientific},
        {id: 2, placeholder: 'Common Name', name: 'common', value: input.common},
        {id: 3, name: 'colors', value: input.colors,placeholder: 'Appearance - Colors'},
            {id: 4, name: 'shape', value: input.shape,placeholder: 'Appearance - Shape'},
            {id: 5, name: 'hosts', value: input.hosts,placeholder: 'Hosts'},
            {id: 6, name: 'habitat', value: input.habitat,placeholder: 'Habitat'},
            {id: 7, name: 'njLocations', value: input.njLocations,placeholder: 'NJ Locations'},
            {id: 8, name: 'larvaeActive', value: input.larvaeActive,placeholder: 'Larvae - When active?'},
            {id: 9, name: 'larvaeFeed', value: input.larvaeFeed,placeholder: 'Larvae - Feed on?'},
           
            {id: 10, name: 'nymphActive', value: input.nymphActive,placeholder: 'Nymph - When active?'},
            {id: 11, name: 'nymphFeed', value: input.nymphFeed,placeholder: 'Nymph - Feed on?'},
           
            {id: 12, name: 'adultActive', value: input.adultActive,placeholder: 'Adult - When active?'},
            {id: 13, name: 'adultFeed', value: input.adultFeed,placeholder: 'Adult - Feed on?'},
            {id: 14, name: 'intro', value: input.intro, placeholder: 'Intro text'},
    ]

    let inputElements = inputArray.map(item => (
        <BorderlessInput key={item.id} placeholder={item.placeholder} errorText=''>
            <input type="text" name={item.name} value={item.value} placeholder='&nbsp;' onChange={handleChange}/>
        </BorderlessInput>
    ))

    return (
        <BasicPage.Text>
            {inputElements}
            <BasicPage.HoverCard bgColor={theme.colors.main} onClick={handleSave}>
            <BasicPage.LinkButton.CardSpecial >
              <span >Submit</span>
            </BasicPage.LinkButton.CardSpecial>
          </BasicPage.HoverCard>

        </BasicPage.Text>

    )
}

export default AddEditTick