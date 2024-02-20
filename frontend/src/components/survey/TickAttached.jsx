import styles from './survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericRadio from '../ui/GenericRadio'
import GenericTextarea from '../ui/GenericTextarea'
import { yesNoArray, foundArray } from './surveyFormData'
import { useState } from 'react'

const TickAttached = () => {

    const [input, setInput] = useState({})
    const handleChange = ({ target: { value, name } }) => {
        setInput((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Tick Attachment Information</h4>
            <div className={styles.responsiveDiv}>
                <GenericRadio label={`Indicate on who/what tick(s) were found *`} idString="foundOn" valueArray={foundArray} state={input} handleChange={handleChange} />
                {input.foundOn === "Other" && (
                    <GenericInput idString="foundOnOther" required={input.foundOn === "Other"} placeholder="Describe the object where you found the tick" />
                )}
                {input.foundOn === "Animal" && (
                    <GenericInput idString="animal" required={input.foundOn === "Animal"} placeholder="Specify Animal" />
                )}

                {(input.foundOn === "Person" || input.foundOn === "Animal") && (
                    <>
                        <GenericRadio label={`If tick(s) were found on person/animal, was it attached *?`} idString="tickAttached" valueArray={yesNoArray} state={input} handleChange={handleChange} />
                        {console.log('test')}


                        {input.tickAttached === "yes" && (
                            <>

                                <GenericInput label="Date Removed *" idString="dateRemoved" type="date" required={true} />


                                {input.foundOn === "Person" && (
                                    <>
                                        <GenericRadio label={`Was the person bitten by the tick? *`} idString="submitterBitten" valueArray={yesNoArray} state={input} handleChange={handleChange} />

                                        {input.submitterBitten === "yes" && (
                                            <>
                                                <GenericInput label="Municipality of bitten person *" idString="bittenMuni" required={true} placeholder="Where bitten person lives" />
                                                <GenericInput label="ZIP Code of bitten person *" idString="bittenZip" required={true} placeholder="Where bitten person lives" />
                                            </>
                                        )}

                                        <GenericRadio label={`Has the bitten person traveled outside of New Jersey within the past 10 days? *`} idString="bittenTraveled" valueArray={yesNoArray} state={input} handleChange={handleChange} />

                                        {input.bittenTraveled === "yes" && (
                                            <GenericTextarea label="Where did the bitten person travel?" idString="travelInfo" />

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