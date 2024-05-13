import styles from './Survey.module.css'
import GenericInput from '../ui/GenericInput'
import GenericTextarea from '../ui/GenericTextarea'
import GenericRadio from '../ui/GenericRadio'
import { locationOptions } from './surveyFormData'

const TickLocation = ({ id, data = {}, handleData }) => {

    return (
        <div className={styles.formSection}>

            <h4 className={styles.sectionTitle}>Tick Location Information</h4>
            <div className={styles.responsiveDiv}>
                <div className={styles.tickSubSection}>
                    <div className={styles.tickSubSection}>
                        <GenericInput value={data.dateTickFound} handleChange={handleData} label="Date tick was found *"  name={`dateTickFound,${id}`} required={true} type='date' />
                        <GenericInput 
                        value={data.tickMuni} handleChange={handleData} 
                        label="City where tick was found *"  
                        name={`tickMuni,${id}`} 
                        required={true} type='text' />
                        
                    </div>
                    <div className={styles.tickSubSection}>
                        <GenericInput value={data.tickCounty} handleChange={handleData} label="County where tick was found *"  name={`tickCounty,${id}`} required={true} type='text' />
                        <GenericInput value={data.tickZip} handleChange={handleData} label="ZIP code where tick was found *"  name={`tickZip,${id}`} required={true} type='text' />
                    </div>
                </div>
                <GenericRadio
                    label="Descriptor of Location*"
                    name={`locationDesc,${id}`}
                    valueArray={locationOptions}
                    state={data.locationDesc}
                    handleChange={handleData}
                />
                

                {data.locationDesc === "Other" && (
                    <GenericInput value={data.locationDescOther} handleChange={handleData} name={`locationDescOther,${id}`} required={data.locationDesc === "Other"} placeholder="Describe the location" />

                )}
                <GenericTextarea label="Describe activity/activities when tick(s) were acquired:"  name={`activities,${id}`} value={data.activities} onChange={handleData} />
            </div>

        </div>


    )
}

export default TickLocation