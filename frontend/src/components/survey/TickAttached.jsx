import styles from './Survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericRadio from '../ui/GenericRadio'
import GenericTextarea from '../ui/GenericTextarea'
import { yesNoArray, foundArray } from './surveyFormData'
import { useState } from 'react'

const TickAttached = ({id, data, handleData}) => {

    return (
        <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Tick Embedded Information</h4>
            <div className={styles.responsiveDiv}>
                <GenericRadio label={`Indicate on who/what tick(s) were found *`} name={'foundOn'} id={id}  valueArray={foundArray} state={data.foundOn} handleChange={handleData} />
                {data.foundOn === "Other" && (
                    <GenericInput id={id} name={`foundOnOther`} required={data.foundOn === "Other"} placeholder="Describe the object where you found the tick" value={data.foundOnOther} handleChange={handleData} />
                )}
                {data.foundOn === "Animal" && (
                    <GenericInput id={id} name={`animal`} required={data.foundOn === "Animal"} placeholder="Specify Animal" value={data.animal} handleChange={handleData} />
                )}

                {(data.foundOn === "Person" || data.foundOn === "Animal") && (
                    <>
                        <GenericRadio label={`If tick(s) were found on person/animal, was it embedded *?`} id={id} name={`tickAttached`} valueArray={yesNoArray} state={data} handleChange={handleData} />
                        


                        {data.tickAttached?.toLowerCase() === "yes" && (
                            <>

                                <GenericInput label="Date Removed *" id={id} name={`dateRemoved`} type="date" required={true} value={data.dateRemoved} handleChange={handleData} />


                                {data.foundOn === "Person" && (
                                    <>
                                        <GenericRadio label={`Was the person bitten by the tick? *`} id={id} name={`submitterBitten`} valueArray={yesNoArray} state={data} handleChange={handleData} />

                                        {data.submitterBitten === "yes" && (
                                            <>
                                                <GenericInput label="City of bitten person *" id={id} name={`.bittenMuni`} required={true} placeholder="Where bitten person lives"  value={data.bittenMuni} handleChange={handleData}/>
                                                <GenericInput label="ZIP Code of bitten person *" id={id} name="bittenZip" required={true} placeholder="Where bitten person lives" value={data.bittenZip} handleChange={handleData}/>
                                            </>
                                        )}

                                        <GenericRadio label={`Has the bitten person traveled outside of New Jersey within the past 10 days? *`} id={id} name={`bittenTraveled`} valueArray={yesNoArray} state={data} handleChange={handleData} />

                                        {data.bittenTraveled === "yes" && (
                                            <GenericTextarea label="Where did the bitten person travel?" id={id} name={`travelInfo`}
                                            value={data.travelInfo} handleChange={handleData} />

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