import styles from './survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericTextarea from '../ui/GenericTextarea'
import GenericRadio from '../ui/GenericRadio'
import { useState } from 'react'

const TickLocation = () => {

    const [input, setInput] = useState({})
    const handleChange = ({ target: { value, name } }) => {
        setInput((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className={styles.formSection}>

            <h4 className={styles.sectionTitle}>Tick Location Information</h4>
            <div className={styles.responsiveDiv}>
                <GenericInput label="Date tick was found *" idString="dateTickFound" required={true} type='date' />
                <GenericInput label="Municipality where tick was found *" idString="tickMuni" required={true} type='text' />
                <GenericInput label="County where tick was found *" idString="tickCounty" required={true} type='text' />
                <GenericInput label="ZIP code where tick was found *" idString="tickZip" required={true} type='text' />
                <GenericRadio label="Descriptor of Location*" idString="locationDesc" valueArray={locationOptions} state={input} handleChange={handleChange} />

                {input.locationDesc === "Other" && (
                    <GenericInput idString="locationDescOther" required={input.locationDesc === "Other"} placeholder="Describe the location" />

                )}
                <GenericTextarea label="Describe activity/activities when tick(s) were acquired:" idString="activities" />
            </div>

        </div>


    )
}

export default TickLocation