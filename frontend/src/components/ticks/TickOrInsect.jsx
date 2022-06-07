import React from 'react'
import { BasicPage } from '../GeneralStyles'
import mouth from '../../images/slide 6.png'
import scutum from '../../images/slide 5.png'
import stage from '../../images/slide 7.jpg'
import HorizScrollCont from '../ui/horizontalScrollingContainer/HorizScrollCont'
import ImageCard from '../ui/imageCard/ImageCard'
// import styled from 'styled-components'
// import { theme } from '../../theme'
// import OutlineCard from '../ui/outlineCard/OutlineCard'

// const Styles = {
//   Card: styled(OutlineCard)`
//   width: 90%;
//   `,
//   Subtitle: styled(BasicPage.SectionSubtitle)`
//   padding: 1rem;
//   border-top: 0.5px solid ${({ theme }) => theme.colors.greyBG};
//   `,
// }

const TickOrInsect = () => {

  let width = window.innerWidth

  const arachnids = [
    {
      id: 1, imgUrl: 'https://bugwoodcloud.org/images/384x256/5445143.jpg', title: 'Clover Mites', 
      // subTitle: 'Whitney Cranshaw, Colorado State University, Bugwood.org'
    },
    {
      id: 2, imgUrl: 'https://bugwoodcloud.org/images/384x256/1368017.jpg', title: 'Crab Spider', 
      // subTitle: 'Joseph Berger, Bugwood.org'
    },
  ]
  
  const arachElems = arachnids.map(spider => (
    <ImageCard key={spider.id} imgUrl={spider.imgUrl} title={spider.title} subTitle={spider.subTitle} />
  ))

  const insects  = [
    {
      id: 1, imgUrl: 'https://bugwoodcloud.org/images/384x256/1233132.jpg', title: 'Bed Bug', 
    },
    {
      id: 2, imgUrl: 'https://bugwoodcloud.org/images/384x256/5556301.jpg', title: 'Pseudoscorpion', 
    },
    {
      id: 3, imgUrl: 'https://bugwoodcloud.org/images/384x256/5388250.jpg', title: 'Japanese Beetle', 
    },
    {
      id: 4, imgUrl: 'https://bugwoodcloud.org/images/384x256/5360751.jpg', title: 'Stink Bug', 
    },
    {
      id: 5, imgUrl: 'https://bugwoodcloud.org/images/384x256/5369900.jpg', title: 'Acorn Weevil', 
    },
    {
      id: 6, imgUrl: 'https://bugwoodcloud.org/images/384x256/5370352.jpg', title: 'Whitemarked Spider Beetle', 
    },
    {
      id: 7, imgUrl: 'https://bugwoodcloud.org/images/384x256/5462408.jpg', title: 'Smooth Spider Beetle', 
    },
    
  ]

    
  const insectElems = insects.map(bug => (
    <ImageCard key={bug.id} imgUrl={bug.imgUrl} title={bug.title} subTitle={bug.subTitle} />
  ))

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
          <figcaption style={{ fontSize: '1.6rem' }}>A male tick (right) has a scutum (a.k.a. shield) that takes up most of the body, while in a female (left), as well as in nymphs and larvae, the scutum covers only part of the tick. Nymphs and adults have 4 pairs of legs (8 total) but the tiny larvae only have 3 pairs (6 legs total). The pictures are of <i>Rhipicephalus sanguineus</i> (photo credit Andrea Egizi, PhD).
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
          <figcaption style={{ fontSize: '1.6rem' }}>The tick’s mouthparts include the hypostome and palps. The hypostome enters the skin and draws up the blood. The palps do not enter the body when feeding, splaying out to the side while attached to its host. Ixodes scapularis (photo credit Andrea Egizi, PhD).
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      Ticks have 3 different life stages that vary in size. The first stage is called a larva, after a blood meal the larva becomes a nymph, after a blood meal the nymph becomes an adult - either male or female.  The features used to identify ticks can vary by life stage.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={stage} alt='ticks at different life stages' />
          <figcaption style={{ fontSize: '1.6rem' }}>This photo is of a female blacklegged tick (left) next to a sesame seed. On top of the sesame seed is a blacklegged tick as a nymph (photo credit Jim Occi).
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
        
            

 <BasicPage.SectionTitle>Common non-ticks often mistaken for ticks! <i>This is not a comprehensive list</i></BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle>
  Arachnids
</BasicPage.SectionSubtitle>
{width > 450 
? (<div style={{display: 'flex', justifyContent: 'center'}}>
{arachElems}
</div>) 
: ( <HorizScrollCont cardArray={arachElems}/> )}

<BasicPage.SectionSubtitle>
  Insects
</BasicPage.SectionSubtitle>
{width > 450 
? (<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
{insectElems}
</div>) 
: ( <HorizScrollCont cardArray={insectElems}/> )}
{/*<BasicPage.ImageCont>
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