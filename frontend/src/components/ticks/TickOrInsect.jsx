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
      id: 1, imgUrl: 'https://bugwoodcloud.org/images/384x256/1123015.jpg', title: 'Clover Mites', 
      path: "https://njaes.rutgers.edu/pubs/publication.php?pid=fs175"
      
    },
    {
      id: 2, imgUrl: 'https://bugwoodcloud.org/images/384x256/1368017.jpg', title: 'Crab Spider', 
      
    },
    {
      id: 3, imgUrl: 'https://bugwoodcloud.org/images/384x256/5556301.jpg', title: 'Pseudoscorpion', 
    },
  ]
  
  const arachElems = arachnids.map(spider => (
    <ImageCard key={spider.id} imgUrl={spider.imgUrl} title={spider.title} subTitle={spider.subTitle} path={spider.path} />
  ))

  const insects  = [
    {
      id: 1, imgUrl: 'https://njaes.rutgers.edu/bed-bug/images/bedbug-on-white-sm-500.jpg', title: 'Bed Bug', path: "https://njaes.rutgers.edu/bed-bug/"
    },
    
    {
      id: 3, imgUrl: 'https://static.inaturalist.org/photos/44096780/medium.jpg', title: 'Japanese Beetle', path: "https://njaes.rutgers.edu/fs1009/"
    },
    {
      id: 4, imgUrl: 'https://njaes.rutgers.edu/stink-bug/images/adult-female-full.jpg', title: 'Brown marmorated stink bug', path: 'https://njaes.rutgers.edu/stink-bug/identify.php'
    },
    {
      id: 5, imgUrl: 'https://pemaruccicenter.rutgers.edu/images/cranberry-weevil-1.jpg', title: 'Cranberry Weevil', path: "https://pemaruccicenter.rutgers.edu/entomology/iCranberry-Weevil.html"
    },
    {
      id: 6, imgUrl: "https://bugwoodcloud.org/images/384x256/5439037.jpg", title: "Varied Carpet Beetle", path: "https://njaes.rutgers.edu/fs1181/"
    },
    {
      id: 7, imgUrl: 'https://bugwoodcloud.org/images/384x256/5462408.jpg', title: 'Smooth Spider Beetle', 
    },
    
  ]

    
  const insectElems = insects.map(bug => (
    <ImageCard key={bug.id} imgUrl={bug.imgUrl} title={bug.title} subTitle={bug.subTitle} path={bug.path} />
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
          <figcaption style={{ fontSize: '1.6rem', width: '300px'}}>A male tick (right) has a scutum (a.k.a. shield) that takes up most of the body, while in the female (left), as well as in the nymphs and larvae, the scutum covers only the part of the tick closest to the mouthparts. Nymphs and adult ticks have 4 pairs of legs but the tiny larvae have 3 pairs. Pictured is the brown dog tick, an invasive tick species that can survive indoors (photo credit Andrea Egizi, PhD).
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
          <figcaption style={{ fontSize: '1.6rem', width: '300px' }}>The tick’s mouthparts include the hypostome and palps. The hypostome enters the skin and draws up the blood. The palps do not enter the body when feeding, splaying out to the side while attached to its host. This photo is a close up of a blacklegged tick (photo credit Andrea Egizi, PhD).
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      Ticks have 3 different life stages that vary in size. The first stage is called a larva, after a blood meal the larva becomes a nymph, after a blood meal the nymph becomes an adult - either male or female.  The features used to identify ticks can vary by life stage.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={stage} alt='ticks at different life stages' />
          <figcaption style={{ fontSize: '1.6rem', width: '300px' }}>Photo is of a female blacklegged tick (left) next to a sesame seed. On top of the sesame seed is a blacklegged tick nymph (photo credit Jim Occi, PhD).
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
        
      <BasicPage.ImageCont>
        <figure>
          <img src='https://www.cdc.gov/ticks/images/gallery/Lifeseriesillustration.jpg?_=03668?noicon' alt='ticks at different life stages' />
          <figcaption style={{ fontSize: '1.6rem', width: '300px' }}>An illustration of relative sizes of several ticks at different life stages (photo credit CDC Tick Image Gallery).
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