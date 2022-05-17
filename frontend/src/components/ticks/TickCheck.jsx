import React from 'react'
// import { Link } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import styled from 'styled-components'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'


const StepStyles = {
    CardSpecial: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      margin: 1rem;
      width: 60vw;
    }
    `,
    StepSpan: styled.span`
    // display: inline-block;
    margin: 1rem;
    `
}

const TickCheck = () => {
    return (
        <BasicPage.Text>
            <BasicPage.Title>Tick Checks</BasicPage.Title>
            <p>The most effective way to know if you have a tick is to check yourself and your pets after spending time outside. Practicing thorough tick checks is essential because ticks can take anywhere between 15 minutes to several hours to find a spot they like. There are three levels of checks to perform given how deceptive ticks can be. </p>

            <BasicPage.CardContainer>

                <OutlineCard bgColor={theme.colors.ruTeal} width='90%'>
                    <StepStyles.CardSpecial>
                        <BasicPage.StepSpan>Inspection #1 - Clothing:</BasicPage.StepSpan>
                        <p>
                            Inspect your clothes for crawling ticks before entering your home. After you take off dry outdoor clothing, tumble dry for 10-15 minutes on high heat. It is recommended that damp or wet clothing be dried for 90 minutes on low heat/60 minutes on high heat.
                        </p>
                    </StepStyles.CardSpecial>
                </OutlineCard>
                <OutlineCard bgColor={theme.colors.ruTeal} width='90%'>
                    <StepStyles.CardSpecial>
                        <BasicPage.StepSpan> Inspection #2 - Skin:</BasicPage.StepSpan>
                        
                            <p>Ticks enjoy finding warm and dark places to hide, so glancing over the surface of your skin isn't enough. Places such as behind the ears, between toes and fingers, behind the knees, around the ankles, the groin, your hair, and even your belly button are important to look over.</p>
                           
                        
                    </StepStyles.CardSpecial>
                </OutlineCard>
                <BasicPage.ImageCont>
                                <figure>
                                    <img style={{maxWidth: '80%'}} src='https://www.cdc.gov/ticks/images/gallery/Still-Web-Graphic-Checking-for-ticks_FINAL-2.jpg?_=63048' alt='infographic woman tick check' />
                                    <figcaption>CDC -Ticks Image Gallery</figcaption>
                                </figure>
                            </BasicPage.ImageCont>
                            <OutlineCard bgColor={theme.colors.ruTeal} width='90%'>
                    <StepStyles.CardSpecial>
                        <BasicPage.StepSpan>Extra Inspection - In the shower</BasicPage.StepSpan>
                        <p>
                            When you're taking a shower, this will give you another opportunity to thoroughly inspect your body for ticks, and it may even help wash off ticks that haven't attached yet.
                        </p>
                    </StepStyles.CardSpecial>
                </OutlineCard>

            </BasicPage.CardContainer>

            <BasicPage.SectionSubtitle>Don't forget your pet!</BasicPage.SectionSubtitle>
            
                <p>Checking your pet and even giving them a rinse is important
                    because some ticks may attach to them. Regularly check your dog or outdoor cat even if your pet is on a preventative. Inspection sites can include ears, under the collar, under the tail, in the groin area, between the toes, and the belly area.
                </p>
                <BasicPage.ImageCont>
                    <figure>
                        <img src='https://www.cdc.gov/ticks/images/gallery/Tickcheckdog_eng.jpg?_=03961' alt='infographic dog tick check' />
                        <figcaption>CDC -Ticks Image Gallery</figcaption>
                    </figure>
                </BasicPage.ImageCont>
            



            <p>
            To learn more, check out <BasicPage.InnieLink to='/removal'><span>tick removal</span></BasicPage.InnieLink><br/>

                Even though we can check ourselves and our pets for ticks after adventures, we should also take <BasicPage.InnieLink to='/checkMenu'><span>tick prevention</span></BasicPage.InnieLink>  steps before going out to ensure our safety from common <BasicPage.InnieLink to='/disease'><span>tick-borne pathogens</span></BasicPage.InnieLink> in New Jersey.
            </p>

        <BasicPage.LinkButton.LinkSpec to={'/checkMenu'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span>Back to Prevention</span>
          </BasicPage.LinkButton.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
        </BasicPage.Text>
    )
}

export default TickCheck