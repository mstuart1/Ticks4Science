import React from 'react'
import { BasicPage } from './GeneralStyles'
import TickReportLink from './TickReportLink'
import {ticks} from './ticks/ticks'
import { Link } from 'react-router-dom'

const Ticks = () => {
    let peopleTicks = [11, 5, 1,7]
    let briefTicks = [2,3,4,6,8,9,10,12]

    let peopleTickElements = ticks.map(tick => {
        if (peopleTicks.includes(tick.id)){
            return <li key={tick.id}><Link to={tick.path}><i>{tick.title}</i>, {tick.common}</Link><br/></li>
        }
    })

    let dogTickElements = ticks.map(tick => {
        if (tick.id === 13){
            return <li key={tick.id}><Link to={tick.path}><i>{tick.title}</i>, {tick.common}</Link><br/></li>
        }
    })

    let briefTickElements = ticks.map(tick => {
        if (briefTicks.includes(tick.id)){
            return <li key={tick.id}><Link to={tick.path}><i>{tick.title}</i>, {tick.common}</Link><br/></li>
        }
    })


  return (
    
            <BasicPage.Text>
                <h2>
                    Ticks of NJ
                </h2>
               <TickReportLink/><br/>

               <h3>These are species that can be commonly found on people in New Jersey.</h3>
                <BasicPage.CenteredList>
                    {peopleTickElements}
                </BasicPage.CenteredList>
                <h3> Highlight: Tick commonly found on dogs</h3>
                <BasicPage.CenteredList>
                   
                    {dogTickElements}
                </BasicPage.CenteredList>
                <h3>Brief ID: Taking a Magnifying Glass to...</h3>
                <BasicPage.CenteredList>
                    {briefTickElements}
                </BasicPage.CenteredList>
            </BasicPage.Text>

  )
}

export default Ticks

