import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import TickDataService from '../../services/ticks'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import styled from 'styled-components'


const Styles = {
  CardCont: styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ theme }) => theme.borderRadius};
  // width: 800px;
  `,

  TopCont: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  

  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
  
  `,
  TopImgCont: styled.div`
  margin: 2rem;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    img {
      width: 150px;
      height: 150px;
    }
  `,

  Section: styled.div`
  margin: 1rem;
  `,

  TopInfoCont: styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
 
  div {
    font-size: 1.6rem;
  }
  `,
  MiddleCont: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
  `,
  MiddleInfo: styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 1rem;
  `,
  InfoItem: styled.div`
  margin: 1rem;
  `,

  LifeCont: styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  `,
  PhotoGallery: styled.div`
  display: flex;
  flex-wrap: wrap
  `,
}

const TickPage = () => {
  let { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    let getData = async () =>
      await TickDataService.getTick(id);

    getData().then(response => {
      // console.log('tick page response', response.data)
      let freshData = response.data.foundRecord
      if (typeof freshData.refImgArray === 'string') {

        let newImgArray = JSON.parse(freshData.refImgArray);
        freshData.refImgArray = newImgArray;
      }
      setData(freshData)
    })

  }, [id])

  let refImgElems = data.refImgArray?.images.length > 0 && data.refImgArray.images.map((img, i) => {

    // console.log('public url', process.env.PUBLIC_URL)
    if (i > 0) {

      if (img.includes("http")) {
        return (
          <img src={`${img}`} alt='ticks' style={{ maxWidth: '350px', maxHeight: '250px', borderRadius: '5px', margin: '0.5rem' }} key={i} />
        )
      } else {
        return (
          <img src={process.env.PUBLIC_URL + img} alt='ticks' style={{ maxWidth: '350px', maxHeight: '250px', borderRadius: '5px', margin: '0.5rem' }} key={i} />
        )
      }

    }

  })
  let researchElems
  if (data.researchLinks) {
    let researchLinks = data.researchLinks && JSON.parse(data.researchLinks)
    researchElems = researchLinks.research.map(item => (
      <li><BasicPage.OutieLink href={item.path} target='_blank' rel='noreferrer'><span>{item.text}</span></BasicPage.OutieLink></li>
    ))
  }

  return (
    <BasicPage.Text>
      <Styles.CardCont>
        <Styles.TopCont>
          <Styles.TopImgCont>

            <img src={data.featureImgUrl?.includes("http") ? data.featureImgUrl : process.env.PUBLIC_URL + data.featureImgUrl} alt='tick' style={{ maxWidth: '40vw' }} />
          </Styles.TopImgCont>
          <Styles.TopInfoCont>
            <Styles.Section>
              <h2>Common Name:<br /> {data.common}</h2>
            </Styles.Section><Styles.Section>
              <h2>Scientific Name:<br /> <i>{data.scientific}</i></h2>
            </Styles.Section>
            <Styles.Section>
              <h3>{data.humanHosts && '⭐️ A frequent human biter'}</h3>
            </Styles.Section>
            <Styles.Section>
              {data.intro}
            </Styles.Section>

          </Styles.TopInfoCont>
        </Styles.TopCont>
        <Styles.MiddleCont>
          <Styles.MiddleInfo>
            <Styles.InfoItem><h3>Hosts</h3>{data.hosts}</Styles.InfoItem>
            <Styles.InfoItem><h3>Habitat</h3>{data.habitat}</Styles.InfoItem>
            <Styles.InfoItem><h3>Locations in NJ</h3>{data.njLocations}</Styles.InfoItem>
            <Styles.InfoItem><h3>Active Months</h3>{data.activeMonths}</Styles.InfoItem>
          </Styles.MiddleInfo>
          {data.mapImgUrl?.length > 0 && (<Styles.MiddleInfo>
            <img src={data.mapImgUrl} alt='map of tick locations' style={{ maxWidth: '250px' }} />
          </Styles.MiddleInfo>)}
        </Styles.MiddleCont>
        <Styles.MiddleCont>
          {refImgElems}
        </Styles.MiddleCont>
        {data.researchLinks && (
          <OutlineCard margin='1rem'>
            <h3>Research Links</h3>
            <ul style={{ padding: '1rem' }}>
              {researchElems}
            </ul>
          </OutlineCard>
        )}
        <OutlineCard>
          <h3>A Reminder About Engorged Ticks</h3>
          <p>Blood feeding increases the <BasicPage.InnieLink to='/tickOrInsect'><span>tick's size drastically</span></BasicPage.InnieLink> and can increase the chances of them passing on a <BasicPage.InnieLink to='/disease'><span>pathogen</span></BasicPage.InnieLink></p>
        </OutlineCard>
      </Styles.CardCont>
    </BasicPage.Text>
  )
}

export default TickPage
