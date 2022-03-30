import React from 'react'
import { BasicPage } from '../GeneralStyles'
import TickReportLink from './TickReportLink'
import { ticks } from './ticks'

const Ticks = () => {
    let peopleTicks = [11, 5, 1, 7]
    let briefTicks = [2, 3, 4, 6, 8, 9, 10, 12]

    let peopleTickElements = ticks.map(tick => {
        if (peopleTicks.includes(tick.id)) {
            return <li key={tick.id}><BasicPage.InnieLink to={tick.path}><span>⭐️<i>{tick.title}</i>, {tick.common}</span></BasicPage.InnieLink><br /></li>
        } else {
            return null
        }
    })

    let dogTickElements = ticks.map(tick => {
        if (tick.id === 13) {
            return <li key={tick.id}><BasicPage.InnieLink to={tick.path}><span>⭐️<i>{tick.title}</i>, {tick.common}</span></BasicPage.InnieLink><br /></li>
        } else {
            return null
        }
    })

    let briefTickElements = ticks.map(tick => {
        if (briefTicks.includes(tick.id)) {
            if (tick.common.toLowerCase().includes('gulf coast tick') || tick.common.toLowerCase().includes('groundhog tick')) {
                return <li key={tick.id}><BasicPage.InnieLink to={tick.path}><span>⭐️<i>{tick.title}</i>, {tick.common}</span></BasicPage.InnieLink><br /></li>
            } else {
                return <li key={tick.id}><BasicPage.InnieLink to={tick.path}><span><i>{tick.title}</i>, {tick.common}</span></BasicPage.InnieLink><br /></li>
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
            <p>As citizen scientists, familiarizing yourselves with the ticks you may come across in your day-to-day in New Jersey is essential. Each tick is unique, and not all are interested in people. However, it is important to recognize their similarities and differences and taking necessary <BasicPage.InnieLink to='/prevention'><span>Tick Preventions</span></BasicPage.InnieLink> when enjoying the outdoors and entering tick habitats.
            </p>
            <BasicPage.SectionSubtitle>
                ⭐️ Indicates ticks that seek people as hosts!
            </BasicPage.SectionSubtitle>
            <BasicPage.SectionTitle>
                Common Ticks of New Jersey
            </BasicPage.SectionTitle>


            <BasicPage.List>
                {peopleTickElements}
            </BasicPage.List>
            <BasicPage.SectionTitle> Spotlight: Tick commonly found on dogs across the U.S.</BasicPage.SectionTitle>
            <BasicPage.List>

                {dogTickElements}
            </BasicPage.List>
            <BasicPage.SectionTitle>Other Ticks of New Jersey</BasicPage.SectionTitle>
            <BasicPage.List>
                {briefTickElements}
            </BasicPage.List>
            <BasicPage.SectionTitle>
                Literature Highlight
            </BasicPage.SectionTitle>
            <p><TickReportLink /></p>
        </BasicPage.Text>

    )
}

export default Ticks

