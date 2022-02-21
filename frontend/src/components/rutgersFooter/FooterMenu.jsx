import React from 'react'
import { FooterMenuContainer, SingleMenu } from './RutgersFooter.styled'

const FooterMenu = ({menu}) => {

    let linkElements = menu.links.map(link => (
        <a href={link.path}>{link.text}</a>
    ))
console.log(menu.title)
  return (
    
    <SingleMenu>
        <h3>{menu.title}</h3>
        {linkElements}
    </SingleMenu>
    
  )
}

export default FooterMenu