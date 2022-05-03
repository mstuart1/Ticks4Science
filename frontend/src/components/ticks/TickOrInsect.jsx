import React from 'react'
import { BasicPage } from '../GeneralStyles'
import styled from 'styled-components'
import mouth from '../../images/slide 6.png'
import scutum from '../../images/slide 5.png'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'

const TickIns = {
  Card: styled(OutlineCard)`
  width: 90%;
  `,
  Subtitle: styled(BasicPage.SectionSubtitle)`
  padding: 1rem;
  border-top: 0.5px solid ${({ theme }) => theme.colors.greyBG};
  `,
}

const TickOrInsect = () => {
  return (
    <BasicPage.Text>
      <BasicPage.Title>Are You Sure It's A Tick?
      </BasicPage.Title>
      <p>
      Ticks are arachnids like spiders. Below, we list some of the main features of a tick to help you identify what may be a tick before moving forward with a <BasicPage.InnieLink to='/preSurvey'><span>tick submission</span></BasicPage.InnieLink>. 
      </p>
      <p>
      The scutum is a hardened plate on the back of the tick. It can have patterns or colors that are useful when identifying different species of ticks.
      </p>
      <BasicPage.ImageCont>
            <figure>
              <img src={scutum} alt='scutum' />
              <figcaption style={{fontSize: '1.6rem'}}>A male tick (right) will have a scutum that takes up nearly the entire body, while in the female (as well as nymphs and larvae) the scutum will cover only the anterior part of the tick (left). The part of the abdomen not covered by the scutum is what expands when the tick fills with blood. Rhipicephalus sanguineus (photo credit Andrea Egizi, PhD)
              </figcaption>
            </figure>

          </BasicPage.ImageCont>
          <p>
          The mouthparts of the tick (their size and shape) can also be useful for identifying tick species.
          </p>
          <p>
          Close-up of tick mouthparts
          </p>
          <BasicPage.ImageCont>
            <figure>
              <img src={mouth} alt='mouth parts' />
              <figcaption style={{fontSize: '1.6rem'}}>The tick’s mouthparts include the hypostome and palps. The hypostome enters the skin and draws up the blood. The palps do not enter the body when feeding, splaying out to the side while attached to its host. Ixodes scapularis (photo credit Andrea Egizi, PhD).
              </figcaption>
            </figure>
          </BasicPage.ImageCont>

{/* <BasicPage.SectionTitle>Common non-ticks often mistaken for ticks! <i>This is not a comprehensive list</i></BasicPage.SectionTitle>
<BasicPage.SectionSubtitle>
  Arachnids
</BasicPage.SectionSubtitle>
<BasicPage.ImageCont>
            <figure>
              <img src={mouth} alt='mouth parts' />
              <figcaption style={{fontSize: '1.6rem'}}>The tick’s mouthparts include the hypostome and palps. The hypostome enters the skin and draws up the blood. The palps do not enter the body when feeding, splaying out to the side while attached to its host. Ixodes scapularis (photo credit Andrea Egizi, PhD).
              </figcaption>
            </figure>
          </BasicPage.ImageCont> */}
      <BasicPage.LinkButton.LinkSpec to={'/steps'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span>Back to Steps</span>
          </BasicPage.LinkButton.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
    </BasicPage.Text>
  )
}

export default TickOrInsect