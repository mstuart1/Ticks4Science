import React from 'react'
import { emergingDiseases, commonDiseases, animalDiseases } from './diseaseCards'
import { BasicPage } from './GeneralStyles'
import { theme } from '../theme'
import stages from '../images/slide 21.jpg'
import stages2 from '../images/slide 22.jpg'
import OutlineCard from './ui/outlineCard/OutlineCard'



const Diseases = () => {

    const createDiseaseCards = (diseaseArray) => {

        let elements = diseaseArray.map((dis, i) => {

            return (
                <OutlineCard key={i} >
                    <span style={{ fontWeight: 'bold' }}>{dis.title}</span>
                    <br />
                    <span>{dis.assoc}</span>
                    <br />
                    <span>{dis.symptoms}</span>
                </OutlineCard>)


        })
        return elements
    }

    let commonElements = createDiseaseCards(commonDiseases)
    let emergingElements = createDiseaseCards(emergingDiseases)
    let animalElements = animalDiseases.map((dis, i) => (
        <OutlineCard key={i}>
            <span style={{fontWeight: 'bold'}}>{dis.title}</span><br/>
            <span>{dis.assoc}</span>
            <br/>
            <span>Summarized <BasicPage.OutieLink href={dis.link} target="_blank"><span>here</span></BasicPage.OutieLink></span>

        </OutlineCard>
    ))

    // console.log(commonElements)

    return (
        <BasicPage.Text>
            <BasicPage.Title>
                Tick-Borne Diseases
            </BasicPage.Title>
            <BasicPage.SectionSubtitle>
                ⭐️ <span color={theme.colors.ruRed}>Disclaimer</span>: This page is intended for spreading awareness and should not be used as a source for medical advice or diagnosis. If you may have a tick-borne disease, seek a medical professional's guidance for appropriate assistance!
            </BasicPage.SectionSubtitle>
            <p>
            Bacteria, viruses, or parasites transmitted by ticks are called "tick-borne pathogens" and they can cause "tick-borne diseases". When a tick bites a person or pet, there is a potential that infection can occur depending on whether that tick was carrying a tick-borne pathogen and how long the tick was attached. It's essential to recognize the signs and symptoms of common tick-borne diseases in New Jersey and seek medical attention as soon as possible after a tick bite if you suspect an infection.
            </p>
            <p>
                The most common symptoms of a tick-borne disease are non-specific flu-like symptoms, such as fever, tiredness, headache, joint pain, and muscle aches. Symptoms may develop within a few days to several months after the initial tick bite.  This makes them hard to differentiate from other illnesses. Some tick-borne diseases are associated with a rash, but not all people will develop the rash. Some people do not become sick after being infected with a tick-borne pathogen.
            </p>
            <p>
                Note: It is possible to have more than one tick-borne illness simultaneously. This is either because the tick was infected with more than one pathogen or you were potentially bit by multiple ticks.
            </p>
            <BasicPage.SectionTitle>Common Tick-Borne Diseases in New Jersey</BasicPage.SectionTitle>

            <BasicPage.CardContainer>
                {commonElements}
            </BasicPage.CardContainer>
            <BasicPage.ImageCont>
                <figure>
                    <img src={stages} alt='engorged tick' />
                    <figcaption style={{ fontSize: '1.4rem' }}>This photo shows blacklegged ticks at different stages of feeding. The left shows an unfed tick, and as you move to the right, each tick grows in size. The longer a tick feeds, the greater chance of it transmitting a pathogen (photo credit Jim Occi).
                    </figcaption>
                </figure>
            </BasicPage.ImageCont>
            <BasicPage.SectionTitle>Emerging Tick-Borne Diseases in New Jersey</BasicPage.SectionTitle>


            <p>
                Tick populations in New Jersey are changing in distribution and abundance, so there may also be new and undetected tick-borne diseases in the state. It's vital to identify ticks and potential pathogens in New Jersey, and that's why we encourage you to <BasicPage.InnieLink to='/preSurvey'><span>submit</span></BasicPage.InnieLink> any and all ticks to NJ Ticks 4 Science! While this page highlights common, emerging, and future tick-borne diseases that could affect New Jersey residents, there are rising cases of tick-borne disease all over the United States. As citizen scientists, becoming educated on your surroundings and pathogens will keep you and your loved ones safe when enjoying the outdoors!

            </p>
            <div>Emerging New Jersey Tick-borne Diseases
            </div>
            <BasicPage.CardContainer>
                {emergingElements}
            </BasicPage.CardContainer>
            <BasicPage.ImageCont>
                <figure>
                    <img src={stages2} alt='engorged tick' />
                    <figcaption style={{ fontSize: '1.4rem' }}>Above: Adult, larva, and nymph lone star ticks, unfed. Below: Engorged (blood-fed) lone star ticks (photo credit Jim Occi).</figcaption>
                </figure>
            </BasicPage.ImageCont>
            <p>
                For the New Jersey list of communicable diseases spread by ticks (and mosquitoes), visit the New Jersey Department of Health’s website <BasicPage.OutieLink target='_blank' href='https://www.nj.gov/health/cd/topics/vectorborne.shtml'><span>Fight the Bite, NJ!</span></BasicPage.OutieLink>.
            </p>
            <p>
                For a further list of the tick-borne diseases in the United States and specific descriptions of each condition, visit the Centers for Disease Control and Prevention website on <BasicPage.OutieLink target='_blank' href='https://www.cdc.gov/ticks/diseases/index.html'><span>Diseases Transmitted by Ticks</span></BasicPage.OutieLink>.
            </p>
            <BasicPage.SectionTitle>Emerging Tick-Borne Diseases in Domesticated Animals</BasicPage.SectionTitle>

<BasicPage.CardContainer>
    {animalElements}
</BasicPage.CardContainer>
<BasicPage.ImageCont>
    <figure>
        <img src='https://www.cdc.gov/ticks/images/gallery/CDCMosquitoPHOCO-218.jpg?_=40558?noicon' alt='dog' />
        <figcaption style={{ fontSize: '1.4rem' }}>Applying tick preventative to a dog. CDC - Ticks Image Gallery
        </figcaption>
    </figure>
</BasicPage.ImageCont>
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

export default Diseases