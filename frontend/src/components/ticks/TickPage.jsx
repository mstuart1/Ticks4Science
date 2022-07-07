import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import { FaStar } from 'react-icons/fa'
import TickDataService from '../../services/ticks'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import styled from 'styled-components'

const Styles = {
  CardCont: styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  @media screen and (min-width: 1000px) {
    width: 1000px;
    & > div {
      width: 30rem;
      height: 37rem;
    }
  }
  `,
  HorizFlex: styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    width: 1000px;
    flex-wrap: nowrap;
  }
  `,
  VertFlex: styled.div`
  margin: 1rem;
  display: flex;
  flex: 1 1 100;
  flex-direction: column;
  `,

  MapCont: styled.div`
  flex: 2;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 1rem;
    max-width: 350px;
  }
  @media screen and (min-width: 1000px) {
    img {
      max-width: 600px;
    }
  }
  `,
}


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

    <figure key={i}>
      <img src={img.source} alt='ticks' style={{ maxWidth: '350px', borderRadius: '5px' }} />
      <figcaption>{img.caption}
      </figcaption>
    </figure>

  ))


  return (
    <BasicPage.Text>
      <BasicPage.Title>
        Scientific Name: <i>{data.scientific}</i></BasicPage.Title>
      <BasicPage.Title>Common: {data.common}</BasicPage.Title>
      <p>{data.intro}</p>
      <Styles.CardCont>
      <OutlineCard bgColor={theme.colors.ruBlue} width='25rem' >
            <BasicPage.SectionTitle>Appearance</BasicPage.SectionTitle>
            <BasicPage.SectionSubtitle>Colors: </BasicPage.SectionSubtitle> {data.colors}
            <BasicPage.SectionSubtitle>Shape: </BasicPage.SectionSubtitle>{data.shape}
          </OutlineCard>
          <OutlineCard bgColor={theme.colors.ruBlue} width='25rem' >
            <BasicPage.SectionTitle>Hosts</BasicPage.SectionTitle>
            {data.hosts}
          </OutlineCard>
      </Styles.CardCont>
      <Styles.HorizFlex>
      
          <BasicPage.ImageCont >
            {refImgElems}
          </BasicPage.ImageCont>
      </Styles.HorizFlex>
      {(data.larvaeFeed || data.larvaeActive) && (
        <>
          <p>
            <FaStar color={theme.colors.ruYellow} /> indicates tick stages that seek people as hosts!
          </p>
          <Styles.CardCont>

            <OutlineCard bgColor={theme.colors.ruYellow}  >
              <BasicPage.SectionTitle>{data.larvaeFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />} Larvae</BasicPage.SectionTitle>
              <p>{data.larvaeActive}</p>
              <p>{data.larvaeFeed}</p>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow} >
              <BasicPage.SectionTitle>{data.nymphFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />} Nymphs</BasicPage.SectionTitle>
              <p>{data.nymphActive}</p>
              <p>{data.nymphFeed}</p>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow} >
              <BasicPage.SectionTitle>{data.adultFeed?.includes('people') && <FaStar color={theme.colors.ruYellow} />} Adults</BasicPage.SectionTitle>
              <p>{data.adultActive}</p>
              <p>{data.adultFeed}</p>
            </OutlineCard>
          </Styles.CardCont>
        </>
      )}
      <Styles.HorizFlex>
        <Styles.VertFlex>
          <OutlineCard bgColor={theme.colors.ruTeal}>
            <BasicPage.SectionTitle>Habitat</BasicPage.SectionTitle>
            <p>{data.habitat}</p>
          </OutlineCard>
          <OutlineCard bgColor={theme.colors.ruTeal}>
            <BasicPage.SectionTitle>Locations in NJ</BasicPage.SectionTitle>
            <p>{data.njLocations}</p>
          </OutlineCard>

        </Styles.VertFlex>
        <Styles.MapCont>
          {data.mapImgUrl && (
            <img src={data.mapImgUrl} alt='map of locations' />
          )}
        </Styles.MapCont>
      </Styles.HorizFlex>




      <BasicPage.SectionTitle>A reminder about engorged ticks</BasicPage.SectionTitle>
      <p>Blood meals increase the tick's size drastically.  However, nymphs may become engorged and still go unnoticed because of their already hard to detect size.</p>
    </BasicPage.Text>
  )
}

export default TickPage
