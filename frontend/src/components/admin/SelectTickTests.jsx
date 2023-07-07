import { BasicPage } from "../GeneralStyles"
import PathogenCard from "./PathogenCard"

const SelectTickTests = () => {

    const tickPathogens = []

    const handleChange = (e) => { }

    return (
        <BasicPage.Text>
            <PathogenCard message="select which tests will always be run for this species" checkedPathogens={tickPathogens} handleChange={handleChange} />
        </BasicPage.Text>
    )
}
export default SelectTickTests