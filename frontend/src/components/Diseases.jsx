import React from 'react'
import { Link } from 'react-router-dom'
import { ticks } from './ticks/ticks'
import { emergingDiseases, commonDiseases } from './diseaseCards'
import { BasicPage } from './GeneralStyles'



const Diseases = () => {

    const createDiseaseCards = (diseaseArray) => {
        // TODO make this handle any number of associated ticks
        let elements = diseaseArray.map((dis, i) => {
            
            let assocElement;
            let tickInfo = ticks.filter(tick => dis.assoc.includes(tick.id));
            if (tickInfo.length > 1) {
                assocElement = (<span>Associated with the <Link to={`/ticks/${tickInfo[0].id}`}>{tickInfo[0].common}</Link> and <Link to={`/ticks/${tickInfo[1].id}`}>{tickInfo[1].common}</Link></span>)
            } else {
                assocElement = (<span>Associated with the <Link to={`/ticks/${tickInfo[0].id}`}>{tickInfo[0].common}</Link></span>)
            }

            return  (
                <BasicPage.HoverCard key={i}>
                    <span>{dis.title}</span>
                    <br />
                    <span>{dis.symptoms}</span>
                    <br />
                    {assocElement}
                </BasicPage.HoverCard>)


        })
        return elements
    }

    let commonElements = createDiseaseCards(commonDiseases)
    let emergingElements = createDiseaseCards(emergingDiseases)

// console.log(commonElements)

    return (
        <BasicPage.Text>
            <BasicPage.Title>
                Tick-borne Diseases
            </BasicPage.Title>
            <p>
                Diseases carried by ticks that are infected with a bacteria, virus, or parasite are called tick-borne diseases. When a tick bites a person or pet, there is a potential that an infection can occur depending on which tick and if that tick was carrying a tick-borne disease. It’s important to recognize the signs and symptoms of common tick-borne diseases in New Jersey and seek medical attention immediately after a tick bite if you suspect an infection.
            </p>
            <p>
                The common tick-borne diseases in New Jersey include anaplasmosis, babesiosis, ehrlichiosis, Lyme Disease, and Rocky Mountain Spotted Fever.
            </p>
            <BasicPage.CardContainer>
                {commonElements}

            </BasicPage.CardContainer>


            <p>
                With the growing population of ticks in New Jersey, there may also be growing tick-borne diseases that are currently undetected in the state. It's important to identify ticks and potential pathogens you may come across in New Jersey, and that's why we encourage you to <Link to='/preSurvey'>Submit</Link> any and all ticks to NJ Ticks 4 Science! While this page highlights the common tick-borne diseases and emerging tick-borne diseases in New Jersey, there are rising cases in the United States. As citizen scientists, becoming educated on your surroundings and pathogens will keep you and your loved ones safe when enjoying the outdoors!
            </p>
            <div>Emerging New Jersey Tick-borne Diseases
            </div>
            <BasicPage.CardContainer>
                {emergingElements}

            </BasicPage.CardContainer>
            <p>
                For a further list of the tick-borne diseases in the United States, and a specific descriptions of each disease, visit the Centers for Disease Control and Prevention website on <a href='https://www.cdc.gov/ticks/diseases/index.html'>Diseases Transmitted by Ticks</a>.

            </p>

        </BasicPage.Text>
    )
}

export default Diseases