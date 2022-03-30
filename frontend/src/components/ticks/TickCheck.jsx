import React from 'react'
import { Link } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import styled from 'styled-components'

const StepStyles = {
    CardSpecial: styled.div`
    display: flex;
    gap: 1rem;
    div {
      margin: 1rem;
      width: 60vw;
    }
    `,
    StepSpan: styled.span`
    display: inline-block;
    margin: 1rem;
    `
}

const TickCheck = () => {
    return (
        <BasicPage.Text>
            <BasicPage.Title>Tick Checks</BasicPage.Title>
            <p>The most effective way to know if you have a tick is to check yourself and your pets after spending time outside. Practicing thorough tick checks is essential because ticks can take anywhere between 15 minutes to several hours to find a spot they like. There are three levels of checks to perform given how deceptive ticks can be.</p>
           
            <BasicPage.CardContainer>

                <BasicPage.Card>
                    <StepStyles.CardSpecial>
                        <StepStyles.StepSpan>Inspection #1 - Clothing:</StepStyles.StepSpan>
                        <div>
                        Inspect your clothes before entering your home. Another measure is to tumble dry the clothes that were just being worn for 10-15 minutes.
                            </div>
                    </StepStyles.CardSpecial>
                </BasicPage.Card>
                <BasicPage.Card>
                    <StepStyles.CardSpecial>
                        <StepStyles.StepSpan> Inspection #2 - Skin:</StepStyles.StepSpan>
                        <div>
                        Ticks enjoy finding warm and dark places to hide, so skimming over the surface of your skin isn't enough. Places such as behind the ears, between toes and fingers, behind the knees, around the ankles, the groin, your hair, and even your belly button are important to look over.
                        </div>
                    </StepStyles.CardSpecial>
                </BasicPage.Card>
                <BasicPage.Card>
                    <StepStyles.CardSpecial>
                        <StepStyles.StepSpan>Inspection #3 - In the shower</StepStyles.StepSpan>
                        <div>
                        When you're taking a shower, this will give you another opportunity to thoroughly inspect your body for ticks, and it may even help wash off ticks that haven't attached yet.
                        </div>
                    </StepStyles.CardSpecial>
                </BasicPage.Card>
               
            </BasicPage.CardContainer>
            
                <BasicPage.SectionSubtitle>Don't forget about your pet!</BasicPage.SectionSubtitle>
                <p>Checking your pet and even giving them a rinse is important
                because some ticks may attach to them. Regularly check your dog or outdoor cat even if your pet is on a preventative. Inspection sites can include under the collar, under the tail, inside the groin area, between the toes, under the front legs, and elbows.</p>

            

            <p>
                Even though we can check ourselves and our pets for ticks after adventures, we should consider taking necessary steps toward personal and pet <BasicPage.InnieLink to='/prevention'><span>Tick Prevention</span></BasicPage.InnieLink> to ensure our safety from common <BasicPage.InnieLink to='/disease'><span>Tick-borne Illnesses</span></BasicPage.InnieLink> in New Jersey.
            </p>

        </BasicPage.Text>
    )
}

export default TickCheck