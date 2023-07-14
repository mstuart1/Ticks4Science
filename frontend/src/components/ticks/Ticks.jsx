import React, { useEffect, useState } from 'react'
import { BasicPage } from '../GeneralStyles'
import TickReportLink from './TickReportLink'
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components'
import TickDataService from '../../services/ticks'
import HorizScrollCont from '../ui/horizontalScrollingContainer/HorizScrollCont'
import TickCard from '../ui/tickCard/TickCard'

const Styles = {
    CenterCntr: styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
    @media screen and (min-width: 1366px) {
     width: 1000px;
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      width: 90vw;
      margin: 1rem;
     }
    `,

    CenterCol: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    `,
    RptLnkBtn: {
        LinkSpec: styled.a`
      text-decoration: none;
      color: ${({ theme }) => theme.colors.ruTeal};
      
      `,
        CardSpecial: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 2rem;
      span {
        padding: 1.6rem;
      }
    `,


    },
    LeftAlignCont: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  
    min-height: 80vh;
    max-width: 900px;
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 100vw;
      
     }
    `,
    Para: styled.p`
    font-size: 1.6rem;
    margin: 2rem;
    `
}

const Icon = styled.span`
    color: ${({ theme }) => theme.colors.main};
`

const Ticks = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        let getData = async () =>
            await TickDataService.getAllTicks();

        getData().then(response => {
            // console.log(response.data)
            setData(response.data.allTicks)
        })
    }, [])

    // console.log(data)

    let peopleTicks = ['americanum', 'variabilis', 'scapularis']
    let invasiveTicks = ['longicornis']
    let otherTicks = ['kelleyi', 'albipictus', 'leporispalustris', 'brunneus', 'cookei', 'dentatus', 'texanus', 'marxi', 'texanus', 'sanguineus']
    let newTick = ['maculatum']

    let peopleCardElements = data?.map(tick => {
        if (peopleTicks.some(item => tick.scientific?.includes(item))) {
            tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />

        } else {
            return null
        }
    })

    let invTickElem = data?.map(tick => {
        if (invasiveTicks.some(item => tick.scientific?.includes(item))) {
            tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />
        } else {
            return null
        }
    })

    let otherTickElem = data?.map(tick => {
        if (otherTicks.some(item => tick.scientific?.includes(item))) {
            if (tick.common?.toLowerCase().includes('brown dog tick') || tick.common?.toLowerCase().includes('groundhog tick')) {
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


    let newTickElem = data?.map(tick => {
        if (newTick.some(item => tick.scientific?.includes(item))) {

            tick.peopleTick = true;
            return <TickCard key={tick.id} tick={tick} />


        } else {
            return null
        }
    })




    return (

        <BasicPage.Text>
            <BasicPage.Title>
                Ticks of NJ
            </BasicPage.Title>
            <p>
                As citizen scientists, familiarizing yourselves with the ticks you may come across in New Jersey is essential. Each tick species is unique, living in different habitats and feeding on different hosts. But in New Jersey, ticks are found nearly everywhere, so it is important to take necessary <BasicPage.InnieLink to='/checkMenu'><span>tick preventions</span></BasicPage.InnieLink> when enjoying the outdoors and entering tick habitats.
            </p>
            <p>
                Listed below are the three tick species most likely to bite you in New Jersey. The fourth one doesn't often bite humans but is very common in some areas and may bite your dog. Each species is associated with different <BasicPage.InnieLink to='/disease'><span>tick-borne diseases</span></BasicPage.InnieLink>. If you find a tick on you, do not panic! <BasicPage.InnieLink to='/removal'><span>Removing a tick</span></BasicPage.InnieLink> is easy and <BasicPage.InnieLink to='/preSurvey'><span>submitting the tick</span></BasicPage.InnieLink> is easier.
            </p>

            <Styles.CenterCntr style={{ backgroundColor: '#f2f2f2', borderRadius: '1rem' }}>
                <Styles.CenterCol style={{ flex: 1 }}>
                    <BasicPage.SectionTitle>
                        <Icon><FaStar /></Icon> Indicates ticks that seek people as hosts!
                    </BasicPage.SectionTitle>
                    <BasicPage.SectionTitle>
                        Common Ticks of New Jersey
                    </BasicPage.SectionTitle>

                    <HorizScrollCont cardArray={peopleCardElements} />



                    <BasicPage.SectionTitle> Spotlight: Recent invasive tick, very abundant in some areas.</BasicPage.SectionTitle>

                    <HorizScrollCont cardArray={invTickElem} />

                    <BasicPage.SectionTitle>
                        Here we provide a published scientific paper on the ticks of New Jersey by Rutgers scientists!
                    </BasicPage.SectionTitle>

                    <p><TickReportLink /></p>
                </Styles.CenterCol>
            </Styles.CenterCntr>
            <Styles.CenterCntr>

                <p> Many NJ ticks are unlikely to bite us and are usually associated with specific animals such as raccoons or squirrels or birds. If you are a hunter, handle livestock, are a wildlife rehabilitator or work in animal control or run a dog rescue, we might encounter some of these ticks and we encourage you to submit them to NJTicks4Science!</p>



            </Styles.CenterCntr>
            <Styles.CenterCntr style={{ backgroundColor: '#f2f2f2', borderRadius: '1rem' }}>
                <Styles.CenterCol style={{ flex: 1 }}>
                    <BasicPage.SectionTitle>
                        Other Ticks of New Jersey
                    </BasicPage.SectionTitle>

                    <HorizScrollCont cardArray={otherTickElem} />

                    <BasicPage.SectionTitle>
                        Spotlight: Potential new tick in New Jersey
                    </BasicPage.SectionTitle>

                    <HorizScrollCont cardArray={newTickElem} />
                </Styles.CenterCol>
            </Styles.CenterCntr>
        </BasicPage.Text>

    )
}

export default Ticks


