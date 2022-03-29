import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ticks } from './ticks/ticks'
import { emergingDiseases, commonDiseases } from './diseaseCards'

const RemovalPage = {
    Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
    padding: 2em;
    
    li {
        padding: 1em 0;
    }
    `,
    Title: styled.h2`
    font-size: 2em;
    font-weight: 800;
    `,
    Para: styled.p`
    padding: 1em;
    `,
    CardContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    `,
    Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 1em;
    background-color: ${({ theme }) => theme.colors.greyBG};
    margin: 1em;
    span {
        padding: 0 1em;
    }
    `,

}

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
                <RemovalPage.Card key={i}>
                    <span>{dis.title}</span>
                    <br />
                    <span>{dis.symptoms}</span>
                    <br />
                    {assocElement}
                </RemovalPage.Card>)


        })
        return elements
    }

    let commonElements = createDiseaseCards(commonDiseases)
    let emergingElements = createDiseaseCards(emergingDiseases)

console.log(commonElements)

    return (
        <RemovalPage.Container>
            <RemovalPage.Title>
                Tick-borne Diseases
            </RemovalPage.Title>
            <RemovalPage.Para>
                Diseases carried by ticks that are infected with a bacteria, virus, or parasite are called tick-borne diseases. When a tick bites a person or pet, there is a potential that an infection can occur depending on which tick and if that tick was carrying a tick-borne disease. It’s important to recognize the signs and symptoms of common tick-borne diseases in New Jersey and seek medical attention immediately after a tick bite if you suspect an infection.
            </RemovalPage.Para>
            <RemovalPage.Para>
                The common tick-borne diseases in New Jersey include anaplasmosis, babesiosis, ehrlichiosis, Lyme Disease, and Rocky Mountain Spotted Fever.
            </RemovalPage.Para>
            <RemovalPage.CardContainer>
                {commonElements}

            </RemovalPage.CardContainer>


            <RemovalPage.Para>
                With the growing population of ticks in New Jersey, there may also be growing tick-borne diseases that are currently undetected in the state. It's important to identify ticks and potential pathogens you may come across in New Jersey, and that's why we encourage you to <Link to='/preSurvey'>Submit</Link> any and all ticks to NJ Ticks 4 Science! While this page highlights the common tick-borne diseases and emerging tick-borne diseases in New Jersey, there are rising cases in the United States. As citizen scientists, becoming educated on your surroundings and pathogens will keep you and your loved ones safe when enjoying the outdoors!
            </RemovalPage.Para>
            <div>Emerging New Jersey Tick-borne Diseases
            </div>
            <RemovalPage.CardContainer>
                {emergingElements}

            </RemovalPage.CardContainer>
            <RemovalPage.Para>
                For a further list of the tick-borne diseases in the United States, and a specific descriptions of each disease, visit the Centers for Disease Control and Prevention website on <a href='https://www.cdc.gov/ticks/diseases/index.html'>Diseases Transmitted by Ticks</a>.

            </RemovalPage.Para>

        </RemovalPage.Container>
    )
}

export default Diseases