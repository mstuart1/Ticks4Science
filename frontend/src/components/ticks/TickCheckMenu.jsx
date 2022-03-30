import React from 'react'
import { Link } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import styled from 'styled-components'

const MenuStyles = {
    LinkSpec: styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.rutgersTeal};
    `,
    CardSpecial: styled.div`
    
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 22.5rem;
  height: 5rem;
  `,
}

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
    <MenuStyles.LinkSpec key={item.id} to={item.path}>
<BasicPage.Card>
<MenuStyles.CardSpecial>
                <span> {item.title}</span>
               
              </MenuStyles.CardSpecial>
               
            </BasicPage.Card>
    </MenuStyles.LinkSpec>
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