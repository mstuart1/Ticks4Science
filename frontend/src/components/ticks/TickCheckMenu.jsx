import React from 'react'
import { BasicPage } from '../GeneralStyles'

let menuArray = [
    {
        id: 1,
        title:'Tick Checks', 
        path: '/check'
    },
    {id: 2, title:'Tick Removal', path: '/removal'},
    {id: 3, title:'Tick Prevention',path: '/prevention'},
]
let menuElements = menuArray.map(item => (
    <BasicPage.LinkButton.LinkSpec key={item.id} to={item.path}>
<BasicPage.HoverCard>
<BasicPage.LinkButton.CardSpecial>
                <span> {item.title}</span>
               
              </BasicPage.LinkButton.CardSpecial>
               
            </BasicPage.HoverCard>
    </BasicPage.LinkButton.LinkSpec>
))

const TickCheckMenu = () => {
  return (
    <BasicPage.Text>
        <BasicPage.CardContainer>
           {menuElements}
        </BasicPage.CardContainer>
    </BasicPage.Text>
  )
}

export default TickCheckMenu