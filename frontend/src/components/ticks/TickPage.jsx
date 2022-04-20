import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import { FaStar } from 'react-icons/fa'
import TickDataService from '../../services/ticks'
import { theme } from '../../theme'

const TickPage = () => {
  let { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    let getData = async () =>
      await TickDataService.getTick(id);

    getData().then(response => {
      console.log(response.data.record)
      setData(response.data.record)
    })
  }, [id])

console.log(data.refImgArray)


let refImgElems = data.refImgArray?.length > 0 && data.refImgArray.map((img, i) => (
    <BasicPage.ImageCont key={i}>
          <figure>
            <img src={img.source} alt='ticks' style={{ maxWidth: '350px' }} />
            <figcaption>{img.caption}
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
  ))

  
  return (
    <BasicPage.Text>
      <BasicPage.Title>
        Scientific Name:<i>{data.scientific}</i><br />
        Common: {data.common}
      </BasicPage.Title>
      <p>{data.intro}</p>
      <p>
        <FaStar color={theme.colors.ruYellow} /> indicates tick stages that seek people as hosts!
      </p>
      <BasicPage.SectionTitle>Appearance</BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle>Colors:</BasicPage.SectionSubtitle>{data.colors}
      <BasicPage.SectionSubtitle>Shape:</BasicPage.SectionSubtitle>{data.shape}
      <BasicPage.SectionTitle>Hosts</BasicPage.SectionTitle>
      {data.hosts}
{refImgElems}
      <BasicPage.SectionTitle>{data.larvaeFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />}Larvae</BasicPage.SectionTitle>
      {data.larvaeActive}<br />
      {data.larvaeFeed}
      <BasicPage.SectionTitle>{data.nymphFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />}Nymphs</BasicPage.SectionTitle>
      {data.nymphActive}<br />
      {data.nymphFeed}
      <BasicPage.SectionTitle>{data.adultFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />}Adults</BasicPage.SectionTitle>
      {data.adultActive}<br />
      {data.adultFeed}
      <BasicPage.SectionTitle>Habitat</BasicPage.SectionTitle>
      {data.habitat}
      <BasicPage.SectionTitle>Locations in NJ</BasicPage.SectionTitle>
      {data.njLocations}
      <img src={data.mapImgUrl} alt='map of locations' style={{width: '80%'}}/><br/>
      <BasicPage.SectionTitle>A reminder about engorged ticks</BasicPage.SectionTitle>
      <p>Blood meals increase the tick's size drastically.  However, nymphs may become engorged and still go unnoticed because of their already hard to detect size.</p>
    </BasicPage.Text>
  )
}

export default TickPage