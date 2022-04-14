import React from 'react'
import { BasicPage } from '../GeneralStyles'
import styled from 'styled-components'
import comp from '../../images/Slide6.jpg'
import { theme } from '../../theme'

const TickIns = {
  Card: styled(BasicPage.OutlineCard)`
  width: 90%;
  `,
  Subtitle: styled(BasicPage.SectionSubtitle)`
  padding: 1rem;
  border-top: 0.5px solid ${({ theme }) => theme.colors.greyBG};
  `,
}

const TickOrInsect = () => {
  return (
    <BasicPage.Text>
      <BasicPage.Title>Tick or Not
        a Tick?
      </BasicPage.Title>
      <p>
        As humans, we like to categorize things, so naturally ticks are grouped with insects that suck blood such as fleas and mosquitos.
      </p>
      <p>
        But, ticks are arachnids like spiders and scorpions. In New Jersey, spiders are the most likely arachnids to be confused with ticks. Below, we classify some differences between insects, spiders, and ticks to visually identify before moving forward with a <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>.
      </p>
      <BasicPage.CardContainer>
        <TickIns.Card bgColor={theme.colors.ruTeal}>
          <BasicPage.SectionTitle>
            Tick Anatomy 101
          </BasicPage.SectionTitle>
          <TickIns.Subtitle>Adult Ticks</TickIns.Subtitle>
          <BasicPage.List>
            <li>8 legs</li>
            <li>The body is composed of 2 segments: the cephalothorax and the abdomen
            </li>
            <li>The mouthpart is what burrows into the skin</li>
            <li>Nymph ticks will have 6 legs</li>
          </BasicPage.List>
          <BasicPage.ImageCont>
            <figure>
              <img src={comp} alt='comparison of insect and tick' />
              <figcaption>Image provided by Andrea Egizi, PhD
              </figcaption>
            </figure>

          </BasicPage.ImageCont>

        </TickIns.Card>
        {/* // TODO need photos in order to make this card active */}
        {/* <TickIns.Card>
          <BasicPage.SectionTitle>
            Common "Not Ticks"
          </BasicPage.SectionTitle>
          <TickIns.Subtitle>Insects such as beetles</TickIns.Subtitle>
          <BasicPage.List>
            <li>6 legs</li>
            <li>The body is composed of three segments: the head, the thorax, and the abdomen</li>
            <li>May even have wings or antennae</li>
          </BasicPage.List>
          <BasicPage.ImageCont>
            <img src={''} alt='insect' />
          </BasicPage.ImageCont>

          <TickIns.Subtitle>Spiders</TickIns.Subtitle>
          <BasicPage.List>
            <li>8 legs</li>
            <li>Their body has two segments: the cephalothorax and the abdomen</li>
          </BasicPage.List>
          <BasicPage.ImageCont>
            <img src='' alt='spider' />
          </BasicPage.ImageCont>

        </TickIns.Card> */}
      </BasicPage.CardContainer>
      <BasicPage.LinkButton.LinkSpec to={'/steps'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span>Back to Steps</span>
          </BasicPage.LinkButton.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
    </BasicPage.Text>
  )
}

export default TickOrInsect