import React from 'react'
import { BasicPage } from '../GeneralStyles'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'

const TickRemoval = () => {
    return (
        <BasicPage.Text>
            <BasicPage.Title>Tick Removal</BasicPage.Title>
            <BasicPage.ImageCont>
                <figure>
                    <img src='https://www.cdc.gov/ticks/images/gallery/Tickremovalrectangle2.jpg?_=84771' alt='infographic dog tick check' />
                    <figcaption>CDC -Ticks Image Gallery - This diagram demonstrates all four steps of the tick removal process.
                    </figcaption>
                </figure>
            </BasicPage.ImageCont>
            <p>When encountering ticks, the best way to remove them is with fine-tipped tweezers.</p>
            <BasicPage.SectionSubtitle>
                To properly remove a tick:
            </BasicPage.SectionSubtitle>
            <BasicPage.CardContainer>
                <OutlineCard bgColor={theme.colors.main}>
                    <BasicPage.CardSpecial>

                        <div>
                            Place the tweezers as close to the skin as possible and grasp the tick
                        </div>
                    </BasicPage.CardSpecial>
                </OutlineCard>
                <OutlineCard bgColor={theme.colors.main}>
                    <BasicPage.CardSpecial>

                        <div>
                            <p>Pull upwards, making sure not to use any other motion than a steady pull. Doing fast hand movements such as a jerk can cause the tick mouthparts to break off and remain in the wound.</p><p>
                                The key is to BE PATIENT! The mouthpart has backwards facing barbs that make it harder to remove. If the mouthpart does stay in the wound when you remove the tick’s body, sterilize the area and do not worry - your skin will push it out as it heals, as with a splinter.</p>
                        </div>
                    </BasicPage.CardSpecial>
                </OutlineCard>
                <OutlineCard bgColor={theme.colors.main}>
                    <BasicPage.CardSpecial>

                        <div>
                            Once the tick is removed, place the tick in a sealed plastic bag and <BasicPage.InnieLink to='/preSurvey'><span>submit</span></BasicPage.InnieLink>  it to NJ Ticks 4 Science!

                        </div>
                    </BasicPage.CardSpecial>
                </OutlineCard>
                <OutlineCard bgColor={theme.colors.main}>
                    <BasicPage.CardSpecial>

                        <div>
                            Importantly, clean the bite wound with rubbing alcohol. Wash your hands and tweezers with soap and water after removing all the ticks you have found after completing your thorough <BasicPage.InnieLink to='/check'><span>tick check</span></BasicPage.InnieLink>.
                        </div>
                    </BasicPage.CardSpecial>
                </OutlineCard>
            </BasicPage.CardContainer>
           

            <p>If you experience nonspecific flu-like symptoms with or without a fever after the tick bite, seek medical attention. There are ticks in New Jersey that can be infected with tick-borne pathogens. Preventing tick bites is essential to keeping you, your family, and your peers safe when enjoying the outdoors!
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

export default TickRemoval