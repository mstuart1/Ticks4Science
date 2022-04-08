import React from 'react'
import { BasicPage } from '../GeneralStyles'
import {theme} from '../../theme'

const TickRemoval = ()=> {
    return (
        <BasicPage.Text>
            <BasicPage.Title>Tick Removal</BasicPage.Title>
            <p>As citizen scientists, when encountering ticks, one of the tools you may have readily available to remove a tick are tweezers.</p>
            <BasicPage.SectionSubtitle>
            To properly remove a tick so it is removed intact:
            </BasicPage.SectionSubtitle>
            <BasicPage.CardContainer>
                <BasicPage.OutlineCard bgColor={theme.colors.main}>
                <BasicPage.CardSpecial>
                    
                        <div>
                        Place the tweezers as close to the skin as possible and grasp the tick
                            </div>
                    </BasicPage.CardSpecial>
                </BasicPage.OutlineCard>
                <BasicPage.OutlineCard bgColor={theme.colors.main}>
                <BasicPage.CardSpecial>
                    
                        <div>
                        <p>Pull upwards making sure not to use any other motion than a steady pull. Doing something such as a jerk can cause the tick to separate and remain in the wound</p><p>
                        The key is to BE PATIENT! The mouthpart is what you want to remove from the bite area, which the tick firmly secured itself into place there. If the mouthpart does stay in the wound when you remove the tick's body, be sure to go back to remove the mouthpart or seek medical assistance if necessary. You will know if the mouthpart is still in the wound if you see black lines after removing the tick.</p>
                            </div>
                    </BasicPage.CardSpecial>
                </BasicPage.OutlineCard>
                <BasicPage.OutlineCard bgColor={theme.colors.main}>
                <BasicPage.CardSpecial>
                    
                        <div>
                        Once the tick is removed, place the tick in a crush proof container and follow the <BasicPage.InnieLink to='/steps'><span>Steps to Participate</span></BasicPage.InnieLink> in NJ Ticks 4 Science!
                            </div>
                    </BasicPage.CardSpecial>
                </BasicPage.OutlineCard>
                <BasicPage.OutlineCard bgColor={theme.colors.main}>
                <BasicPage.CardSpecial>
                    
                        <div>
                        Importantly, clean the bite wound with rubbing alcohol and wash your hands and tweezers with soap and water once you have removing all the ticks you have found and completing your <BasicPage.InnieLink to='/check'><span>Tick Check</span></BasicPage.InnieLink>.
                            </div>
                    </BasicPage.CardSpecial>
                </BasicPage.OutlineCard>
            </BasicPage.CardContainer>
            
            <p>If you experience any symptoms such as a rash, fever, headache, or flu-like symptoms after the tick bite or cannot remove the whole tick, seek medical attention.
            </p>
        </BasicPage.Text>
    )
}

export default TickRemoval