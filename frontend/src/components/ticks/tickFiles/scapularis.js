import scap1 from '../../../images/scap3.jpeg'
import scap2 from '../../../images/scap with pin.jpeg'

import { BasicPage } from '../../GeneralStyles'



const InfoBlurb = () => (

<div>
Blacklegged ticks are the only ticks known to transmit (i.e. vector) <BasicPage.InnieLink to='/disease'><span>Lyme Disease</span></BasicPage.InnieLink>, an inflammatory disease caused by a spirochete bacteria, <i>Borrelia burgdorferi</i>, in New Jersey. They can also transmit <BasicPage.InnieLink to='/disease'><span>Anaplasmosis, Babesiosis, Borrelia miyamotoi disease, and Powassan virus</span></BasicPage.InnieLink>. All stages of the blacklegged tick feed on people, however nymphs and adults are most likely to transmit pathogens, and nymphs are especially dangerous because their <BasicPage.InnieLink to='/tickOrInsect'><span>small size</span></BasicPage.InnieLink> makes them harder to detect. It is essential to practice <BasicPage.InnieLink to='/checkMenu'><span>tick prevention</span></BasicPage.InnieLink> tools when out enjoying nature, to help minimize your risk of contracting a tick-borne pathogen.
</div>
);

const Image1 = () => (
  <BasicPage.ImageCont>
          <figure>
            <img src={scap2} alt='ticks'  />
            <figcaption>Photo credit Jim Occi
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
)

export const scapularis = {
    buttonImgUrl: 'https://digitalcommons.georgiasouthern.edu/usntc_key/1089/thumbnail.jpg',
    scientific: 'Ixodes scapularis',
    common: 'blacklegged tick (old name “deer tick”)',
    keyImg: scap1,
    keyImgCap:'Female I. scapularis waiting for a host (questing), (photo credit Jim Occi, PhD).',
    people: '⭐️ This tick can be found on people',
    info: <InfoBlurb/>,
    hosts: 'This tick is found on a very broad range of hosts such as field mice, chipmunks, skunks, racoons, white-tailed deer, dogs and people.',
    habitat: 'Wooded areas in New Jersey including forest edges and along paths or trails. This tick is very sensitive to drying and is active mostly in shaded areas and early in the morning and late in the evening.',
    njLoc: 'This tick species is distributed statewide and is relatively common.In the 1940’s, these ticks were not listed in New Jersey.As recently as the early 1980’s, I. scapularis were restricted to southern New Jersey, especially the coastal plains.',
    larva: 'Active from April to November, peak abundance occurs from August to October. I. scapularis larvae feed primarily on small mammals, such as field mice and birds, which are pathogen reservoirs.',
    nymph: 'Active from April to November, peak abundance occurs from May to July. I. scapularis nymphs feed on small to large mammals ranging from mice to deer and people.',
    adult: 'Active from October to April, peak abundance in Fall and Spring but can be found throughout Winter when temperatures are above freezing. Adult I. scapularis feed primarily on large mammals, including deer and people.',
    gallery: [Image1]
}