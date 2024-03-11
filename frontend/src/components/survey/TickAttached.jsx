import styles from './Survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericRadio from '../ui/GenericRadio'
import GenericTextarea from '../ui/GenericTextarea'
import { yesNoArray, foundArray } from './surveyFormData'
import { useState } from 'react'

const TickAttached = ({id}) => {

    const [input, setInput] = useState({})
    const handleChange = ({ target: { value, name } }) => {
        setInput((prevState) => ({ ...prevState, [name]: value }))
    }

    // console.log('tickAttached.input', input)
    return (
        <div className={styles.tickSection}>
            <h4 className={styles.sectionTitle}>Tick Embedded Information</h4>
            <div className={styles.responsiveDiv}>
                <GenericRadio label={`Indicate on who/what tick(s) were found *`} idString={`tick${id}.foundOn`} valueArray={foundArray} state={input} handleChange={handleChange} />
                {input[`tick${id}.foundOn`] === "Other" && (
                    <GenericInput idString={`tick${id}.foundOnOther`} required={input[`tick${id}.foundOn`] === "Other"} placeholder="Describe the object where you found the tick" />
                )}
                {input[`tick${id}.foundOn`] === "Animal" && (
                    <GenericInput idString={`tick${id}.animal`} required={input[`tick${id}.foundOn`] === "Animal"} placeholder="Specify Animal" />
                )}

                {(input[`tick${id}.foundOn`] === "Person" || input[`tick${id}.foundOn`] === "Animal") && (
                    <>
                        <GenericRadio label={`If tick(s) were found on person/animal, was it embedded *?`} idString={`tick${id}.tickAttached`} valueArray={yesNoArray} state={input} handleChange={handleChange} />
                        


                        {input[`tick${id}.tickAttached`]?.toLowerCase() === "yes" && (
                            <>

                                <GenericInput label="Date Removed *" idString={`tick${id}.dateRemoved`} type="date" required={true} />


                                {input[`tick${id}.foundOn`] === "Person" && (
                                    <>
                                        <GenericRadio label={`Was the person bitten by the tick? *`} idString={`tick${id}.submitterBitten`} valueArray={yesNoArray} state={input} handleChange={handleChange} />

                                        {input[`tick${id}.submitterBitten`] === "yes" && (
                                            <>
                                                <GenericInput label="Municipality of bitten person *" idString={`tick${id}.bittenMuni`} required={true} placeholder="Where bitten person lives" />
                                                <GenericInput label="ZIP Code of bitten person *" idString="bittenZip" required={true} placeholder="Where bitten person lives" />
                                            </>
                                        )}

                                        <GenericRadio label={`Has the bitten person traveled outside of New Jersey within the past 10 days? *`} idString={`tick${id}.bittenTraveled`} valueArray={yesNoArray} state={input} handleChange={handleChange} />

                                        {input[`tick${id}.bittenTraveled`] === "yes" && (
                                            <GenericTextarea label="Where did the bitten person travel?" idString={`tick${id}.travelInfo`} />

                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}

            </div>

        </div>
    )
}

export default TickAttached