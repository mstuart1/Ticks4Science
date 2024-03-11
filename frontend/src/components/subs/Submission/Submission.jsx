import { useEffect, useState } from 'react'
import styles from './Submission.module.css'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import SubmissionDataService from '../../../services/submission'
import BorderlessFloatButton from '../../ui/borderlessFloatButton/BorderlessFloatButton'

const Submission = () => {
    let { id } = useParams()
    const location = useLocation();
    //the data here will be an object since an object was
    const data = location.state;
    const [loading, setLoading] = useState(false)
    const [dbData, setDbData] = useState(data)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        let getData = async () =>
        await SubmissionDataService.getProgress(id);
        if (!dbData) {
            // setLoading(true)
            getData().then(response => {
                let newData = response.data.record
                console.log('newData', newData)
                if (newData === null) {
                    setError(true)
                    setLoading(false)
                } else {
                    setDbData(response.data.record)
                    setLoading(false)
                }

            }).catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
        }
    }, [id, dbData])
    console.log('dbData', dbData)

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error loading the data</div>
    }
    return (
        <div className={styles.container}>
            <div >
                
                <p className={styles.text}>Submitter Municipality: {dbData?.userMuni}</p>
                <p className={styles.text}>Submitter Zip Code: {dbData?.userZip?.toString().padStart(5, "0")}</p>
                <p className={styles.text}>Indicate on what tick was found: {dbData?.foundOn}</p>
                {dbData?.foundOn === "Other" && <p className={styles.text}>Describe the object where you found the tick: {dbData?.foundOnOther}</p>}
                {dbData?.foundOn === "Animal" && <p className={styles.text}>Specify Animal: {dbData?.animal}</p>}
                {(dbData?.foundOn === "Person" || dbData?.foundOn === "Animal") && <p className={styles.text}>Tick Embedded: {dbData?.tickAttached}</p>}
                {dbData?.tickAttached?.toLowerCase() === "yes" && <p className={styles.text}>Date Removed: {new Date(dbData?.dateRemoved).toString()}</p>}
                {dbData?.foundOn === "Person" && <p className={styles.text}>Submitter Bitten: {dbData?.submitterBitten}</p>}
                {(dbData?.foundOn === "Person" && dbData?.submitterBitten?.toLowerCase() !== 'yes') && <p className={styles.text}>Other person bitten? {dbData?.personBitten}</p>}
                {dbData?.personBitten?.toLowerCase() === 'yes' && <p className={styles.text}>Municipality of bitten person: {dbData?.bittenMuni}</p>}
                {dbData?.personBitten?.toLowerCase() === "yes" && <p className={styles.text}>ZIP Code of bitten person: {dbData?.bittenZip?.toString().padStart(5, "0")}</p>}
                {dbData?.submitterBitten?.toLowerCase() === "yes" && <p className={styles.text}>Did the bitten person travel outside of NJ in the past 10 days: {dbData?.bittenTraveledDom}</p>}
                {dbData?.bittenTraveledDom?.toLowerCase() === "yes" && <p className={styles.text}>Where did the bitten person travel? {dbData?.travelInfo}</p>}
                <p className={styles.text}>Date tick was found: {new Date(dbData?.dateTickFound).toString()}</p>
                <p className={styles.text}>Municipality where tick was found: {dbData?.tickMuni}</p>
                <p className={styles.text}>County where tick was found: {dbData?.tickCounty}</p>
                <p className={styles.text}>ZIP code where tick was found: {dbData?.tickZip?.toString().padStart(5, "0")}</p>
                <p className={styles.text}>Descriptor of Location: {dbData?.locationDesc}</p>
                {dbData?.locationDesc === "Other" && <p className={styles.text}>Describe the location: {dbData?.locationDescOther}</p>}
            </div>
            <div>
            <img className={styles.img} src={dbData?.photoFrontUrl} alt='a tick that is being submitted for identification' />
                {!!dbData?.photoBackUrl?.length && <img className={styles.img} src={dbData?.photoBackUrl} alt='a tick that is being submitted for identification' />}
            </div>
            <div className={styles.buttonCont}>
            <BorderlessFloatButton colors={{text: '#00626d', shadow: '#00626d' } } text='Back to tick progress' width='250px' handleClick={() => navigate(`/progress/${id}`)}></BorderlessFloatButton>
            </div>
        </div>
    )
}
export default Submission