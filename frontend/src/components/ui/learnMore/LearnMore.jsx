import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import InternalLinkFloatButton from '../internalLinkFloatButton/InternalLinkFloatButton'
import QuestionsButton from '../questionsButton/QuestionsButton'

const Styles = {
    LearnCont: styled.div`
    width: 95%;
    margin: 1rem;
    padding: 1rem;

    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
    }
    `,
}

const LearnMore = () => {
  return (
    <Styles.LearnCont>
      
    <span>Want to learn more about New Jersey's tick species?</span>
    <InternalLinkFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal}} to='/ticks' text='View Ticks of New Jersey'/>
   <QuestionsButton/>
   
</Styles.LearnCont>
  )
}

export default LearnMore