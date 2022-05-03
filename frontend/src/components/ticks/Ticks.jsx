import React, { useEffect, useState } from 'react'
import { BasicPage } from '../GeneralStyles'
import TickReportLink from './TickReportLink'
import {FaStar} from 'react-icons/fa'
import styled from 'styled-components'
import TickDataService from '../../services/ticks'
import HorizScrollCont from '../ui/horizontalScrollingContainer/HorizScrollCont'
import TickCard from '../ui/tickCard/TickCard'

const Icon = styled.span`
    color: ${({theme}) => theme.colors.main};
`

const Ticks = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        let getData = async () =>
          await TickDataService.getAllTicks();

        getData().then(response => {
          console.log(response.data.data)
          setData(response.data.data)
        })
      }, [])

    //   console.log(data)

    let peopleTicks = ['americanum', 'variabilis', 'scapularis']
    let dogTicks = ['sanguineus']
    let otherTicks = ['longicornis']
    let briefTicks = ['maculatum', 'kelleyi', 'albipictus', 'leporispalustris', 'brunneus', 'cookei', 'dentatus', 'texanus']

    // let peopleTickElements = data.map(tick => {
    //     if (peopleTicks.some(item => tick.scientific?.includes(item))) {
    //         return <li key={tick.id}><BasicPage.InnieLink to={`/ticks/${tick.id}`}><span><Icon><FaStar/></Icon><i>{tick.scientific}</i>, {tick.common}</span></BasicPage.InnieLink><br /></li>
    //     } else {
    //         return null
    //     }
    // })
    let peopleCardElements = data.map(tick => {
        if (peopleTicks.some(item => tick.scientific?.includes(item))) {
            tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />
               
        } else {
            return null
        }
    })

    let dogTickElements = data.map(tick => {
        if (dogTicks.some(item => tick.scientific?.includes(item))) {
            tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />
        } else {
            return null
        }
    })

    let briefTickElements = data.map(tick => {
        if (briefTicks.some(item => tick.scientific?.includes(item))) {
            if (tick.common?.toLowerCase().includes('gulf coast tick') || tick.common?.toLowerCase().includes('groundhog tick')) {
                tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />
            } else {
                tick.peopleTick = false;
                return <TickCard key={tick.id} tick={tick} />
            }

        } else {
            return null
        }
    })


    return (

        <BasicPage.Text>
            <BasicPage.Title>
                Ticks of NJ
            </BasicPage.Title>
           
            <p>As citizen scientists, familiarizing yourselves with the ticks you may come across in New Jersey is essential. Each tick species is unique, and not all are interested in people. However, it is crucial to recognize their similarities and differences and take necessary <BasicPage.InnieLink to='/prevention'><span>tick preventions</span></BasicPage.InnieLink> when enjoying the outdoors and entering tick habitats.
            </p>
            <p>
            Listed below are the 4 most common ticks you may encounter in New Jersey. While there are currently at least 12 tick species in New Jersey, not all are found on people. As citizen scientists, familiarizing yourself with as many tick species as possible is essential. Understanding what you may encounter most frequently will also help you know what <BasicPage.InnieLink to='/disease'><span>tick-borne diseases</span></BasicPage.InnieLink> you may contract if infected. This insight will allow you to enjoy nature safely and be vigilant for yourself and those around you! If you do happen to find a tick on you, do not panic! <BasicPage.InnieLink to='/removal'><span>Removing a tick</span></BasicPage.InnieLink> is easy and <BasicPage.InnieLink><span>submitting the tick</span></BasicPage.InnieLink> is easier. 

            </p>
            <BasicPage.SectionSubtitle>
                <Icon><FaStar/></Icon> Indicates ticks that seek people as hosts!
            </BasicPage.SectionSubtitle>
            <BasicPage.SectionTitle>
                Common Ticks of New Jersey
            </BasicPage.SectionTitle>
                <p>
                Listed below are the four most common ticks you may come across in New Jersey. While there are currently 13 ticks known to be in New Jersey, not all are interested in interacting with people.</p>

                <HorizScrollCont cardArray={peopleCardElements}/>
                
                <p> As citizen scientists, familiarizing yourselves with as many ticks as possible is important, but understanding what you may encounter most frequently will also help understand what <BasicPage.InnieLink to='/disease'><span>tick-borne diseases</span></BasicPage.InnieLink> you may contract if the tick is infected.</p>
                
                <p>Having this insight will allow you to enjoy nature safely and be vigilant for yourself and those around you! If you do happen to find a tick on you, do not panic! <BasicPage.InnieLink to='/removal'><span>Removing a tick</span></BasicPage.InnieLink> is safe and <BasicPage.InnieLink to='/preSurvey'><span>submitting the tick</span></BasicPage.InnieLink> is easy. 
                </p>
            
            <BasicPage.SectionTitle> Spotlight: Tick commonly found on dogs across the U.S.</BasicPage.SectionTitle>
            
            <HorizScrollCont cardArray={dogTickElements}/>
                
            
            <BasicPage.SectionTitle>Other Ticks of New Jersey</BasicPage.SectionTitle>
            <HorizScrollCont cardArray={briefTickElements}/>
            <BasicPage.SectionTitle>
                Literature Highlight
            </BasicPage.SectionTitle>
           
            <p><TickReportLink /></p>
            <BasicPage.ImageCont>
        <figure>
          <img src={'https://www.cdc.gov/ticks/images/gallery/TrailSign2.jpg?_=04099'} alt='tree sign' />
          {/* <figcaption>Image provided by Andrea Egizi, PhD
              </figcaption> */}
        </figure>
      </BasicPage.ImageCont>
        </BasicPage.Text>

    )
}

export default Ticks

