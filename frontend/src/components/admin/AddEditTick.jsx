import React, { useEffect, useState } from 'react'
import { theme } from '../../theme'
import { BasicPage } from '../GeneralStyles'
import TickDataService from '../../services/ticks'
import { useNavigate, useParams } from 'react-router-dom'
import FormSelectionBlocks from '../ui/FormSelectionBlocks'
// import BorderlessInput from '../ui/borderlessInput/BorderlessInput'

const AddEditTick = () => {
    let { id } = useParams()

    const navigate = useNavigate()

    const [input, setInput] = useState({})

    useEffect(() => {
        let getData = async () =>
            await TickDataService.getTick(id);

        getData().then(response => {
            //   console.log(response.data.record)
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
                let response = await TickDataService.updateForm(input, id)
                console.log(response.data)
            } else {

                let response = await TickDataService.submitForm(input);
                id = response.data.data.id
            }

            setInput({})
            navigate(`/ticks/${id}`)
        } catch (err) {
            console.log(err.message)
        }
    }

    // let inputArray = [
    //     { id: 1, placeholder: 'Scientific Name', name: 'scientific', value: input?.scientific },
    //     { id: 2, placeholder: 'Common Name', name: 'common', value: input?.common },
    //     { id: 3, name: 'colors', value: input?.colors, placeholder: 'Appearance - Colors' },
    //     { id: 4, name: 'shape', value: input?.shape, placeholder: 'Appearance - Shape' },
    //     { id: 5, name: 'hosts', value: input?.hosts, placeholder: 'Hosts' },
    //     { id: 6, name: 'habitat', value: input?.habitat, placeholder: 'Habitat' },
    //     { id: 7, name: 'njLocations', value: input?.njLocations, placeholder: 'NJ Locations' },
    //     { id: 8, name: 'larvaeActive', value: input?.larvaeActive, placeholder: 'Larvae - When active?' },
    //     { id: 9, name: 'larvaeFeed', value: input?.larvaeFeed, placeholder: 'Larvae - Feed on?' },

    //     { id: 10, name: 'nymphActive', value: input?.nymphActive, placeholder: 'Nymph - When active?' },
    //     { id: 11, name: 'nymphFeed', value: input?.nymphFeed, placeholder: 'Nymph - Feed on?' },

    //     { id: 12, name: 'adultActive', value: input?.adultActive, placeholder: 'Adult - When active?' },
    //     { id: 13, name: 'adultFeed', value: input?.adultFeed, placeholder: 'Adult - Feed on?' },
    //     { id: 14, name: 'intro', value: input?.intro, placeholder: 'Intro text' },
    // ]

    // let inputElements = inputArray.map(item => (
    //     <BorderlessInput key={item.id} placeholder={item.placeholder} errorText=''>
    //         <input type="text" name={item.name} value={item.value} placeholder='&nbsp;' onChange={handleChange} />
    //     </BorderlessInput>
    // ))

    return (
        <BasicPage.Text>
            <form style={{ width: '100vw' }}>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Common Name</label>
                    <input type='text' name='common' value={input?.common} />
                </div>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Scientific Name</label>
                    <input type='text' name='scientific' value={input?.scientific} />
                </div>
                <div>
                    <FormSelectionBlocks
                        input={input}
                        handleChange={handleChange}
                        fieldName="humanHosts"
                        valueArray={[{ label: 'Bites Humans', value: 'true' }, { label: "Doesn't Bite Humans", value: 'false' }]}
                    />
                </div>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Active Months</label>
                    <textarea name='activeMonths' value={input?.activeMonths} rows={15} cols={50} />
                </div>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Habitat</label>
                    <textarea name='habitat' value={input?.habitat} rows={5} cols={50} />
                </div>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Hosts</label>
                    <textarea name='hosts' value={input?.hosts} rows={5} cols={50} />
                </div>
                <div
                    style={{ margin: '1rem', display: 'flex', alignItems: "center" }}
                >
                    <label style={{ margin: '1rem' }}>Intro Text</label>
                    <textarea name='intro' value={input?.intro} rows={15} cols={50} />
                </div>
            </form>
            <BasicPage.HoverCard bgColor={theme.colors.main} onClick={handleSave}>
                <BasicPage.LinkButton.CardSpecial >
                    <span >Submit</span>
                </BasicPage.LinkButton.CardSpecial>
            </BasicPage.HoverCard>

        </BasicPage.Text>

    )
}

export default AddEditTick