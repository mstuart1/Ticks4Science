import React from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'

const TickProgress = () => {

    let {id} = useParams()

  return (
    <BasicPage.Text>Tick {id} form submitted</BasicPage.Text>
  )
}

export default TickProgress