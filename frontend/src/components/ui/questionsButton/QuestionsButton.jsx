import React from 'react'
import { theme } from '../../../theme'
import ExternalLinkFloatButton from '../externalLinkFloatButton/ExternalLinkFloatButton'

const QuestionsButton = () => {
  return (
    <ExternalLinkFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} to='mailto:cvbquestions@njaes.rutgers.edu' text='Questions?  Contact Us' />
  )
}

export default QuestionsButton