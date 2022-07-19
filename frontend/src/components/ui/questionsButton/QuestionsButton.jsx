import React from 'react'
import { theme } from '../../../theme'
import OutlineFloatButton from '../outlineFloatButton/OutlineFloatButton'

const QuestionsButton = () => {
  return (
    
    <OutlineFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} handleClick={() => window.open('mailto:cvbquestions@njaes.rutgers.edu', '_blank')}
    text='Questions?  Contact Us' />
    
  )
}

export default QuestionsButton