import styles from './Survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericTextarea from '../ui/GenericTextarea'
import GenericRadio from '../ui/GenericRadio'
import { useState } from 'react'
import {locationOptions} from './surveyFormData'

const TickLocation = ({id}) => {

    const [input, setInput] = useState({})
    const handleChange = ({ target: { value, name } }) => {
        setInput((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className={styles.tickSection}>

            <h4 className={styles.sectionTitle}>Tick Location Information</h4>
            <div className={styles.responsiveDiv}>
                <div className={styles.tickSubSection}>
                <div className={styles.tickSubSection}>
                <GenericInput label="Date tick was found *" idString={`tick${id}.dateTickFound`} required={true} type='date' />
                <GenericInput label="City where tick was found *" idString={`tick${id}.tickMuni`} required={true} type='text' />
                </div>
                    <div className={styles.tickSubSection}>
                <GenericInput label="County where tick was found *" idString={`tick${id}.tickCounty`} required={true} type='text' />
                <GenericInput label="ZIP code where tick was found *" idString={`tick${id}.tickZip`} required={true} type='text' />
                </div>
                </div>
                <GenericRadio label="Descriptor of Location*" idString={`tick${id}.locationDesc`} valueArray={locationOptions} state={input} handleChange={handleChange} />

                {input[`tick${id}.locationDesc`] === "Other" && (
                    <GenericInput idString={`tick${id}.locationDescOther`} required={input`tick${id}.locationDesc` === "Other"} placeholder="Describe the location" />

                )}
                <GenericTextarea label="Describe activity/activities when tick(s) were acquired:" idString={`tick${id}.activities`} />
            </div>

        </div>


    )
}

export default TickLocation