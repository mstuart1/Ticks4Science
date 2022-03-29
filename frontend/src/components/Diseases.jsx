import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
    background-color: ${({theme}) => theme.colors.greyBG};
    margin: 1em 0;
    span {
        padding: 0 1em;
    }
    `,

}

const Diseases = () => {

    return (
        <RemovalPage.Container>
            <RemovalPage.Title>
                Tick-borne Diseases
            </RemovalPage.Title>
            <RemovalPage.Para>
                With the growing population of ticks in New Jersey, there may also be growing tick-borne diseases that are currently undetected in the state. It's important to identify ticks and potential pathogens you may come across in New Jersey, and that's why we encourage you to <Link to='/preSurvey'>Submit</Link> any and all ticks to NJ Ticks 4 Science! While this page highlights the common tick-borne diseases and emerging tick-borne diseases in New Jersey, there are rising cases in the United States. As citizen scientists, becoming educated on your surroundings and pathogens will keep you and your loved ones safe when enjoying the outdoors!
            </RemovalPage.Para>
            <div>Emerging New Jersey Tick-borne Diseases
            </div>
            <RemovalPage.CardContainer>
                <RemovalPage.Card>
                    <span>Powassan Virus</span>
                    <br />
                    <span>Symptoms may begin 1 week to 1 month after initial tick bite.</span>
                    <br />
                    <span>Associated with the <Link to='/ticks/11'>Blacklegged tick</Link> and <Link to='/ticks/9'>Groundhog tick</Link></span>
                </RemovalPage.Card>
                <RemovalPage.Card>
                    <span>Southern tick-associated rash illness (STAR)</span>
                    <br />
                    <span>Symptoms may appear 7 day after initial tick bite.</span>
                    <br />
                    <span>Associated with the <Link to='/ticks/1'>Lone star tick</Link>.</span>
                </RemovalPage.Card>

            </RemovalPage.CardContainer>
            <RemovalPage.Para>
            For a further list of the tick-borne diseases in the United States, and a specific descriptions of each disease, visit the Centers for Disease Control and Prevention website on <a href='https://www.cdc.gov/ticks/diseases/index.html'>Diseases Transmitted by Ticks</a>.

            </RemovalPage.Para>

        </RemovalPage.Container>
    )
}

export default Diseases