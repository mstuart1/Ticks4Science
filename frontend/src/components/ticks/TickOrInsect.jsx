import React from 'react'
import { BasicPage } from '../GeneralStyles'

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
      <BasicPage.SectionTitle>
        Tick Anatomy 101
      </BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle >Adult Ticks</BasicPage.SectionSubtitle>
      <ul>
        <li>8 legs</li>
        <li>The body is composed of 2 segments: the cephalothorax and the abdomen
</li>
        <li>The mouthpart is what burrows into the skin</li>
        <li>Nymph ticks will have 6 legs</li>
      </ul>
      <img src='' alt='comparison of insect and tick'/>
      <BasicPage.SectionTitle>
        Common "Not Ticks"
      </BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle>Insects such as beetles</BasicPage.SectionSubtitle>
      <ul>
        <li>6 legs</li>
        <li>The body is composed of three segments: the head, the thorax, and the abdomen</li>
        <li>May even have wings or antennae</li>
      </ul>
      <img src='' alt='insect'/>
      <BasicPage.SectionSubtitle>Spiders</BasicPage.SectionSubtitle>
      <ul>
        <li>8 legs</li>
        <li>Their body has two segments: the cephalothorax and the abdomen</li>
      </ul>
      <img src='' alt='spider'/>






    </BasicPage.Text>
  )
}

export default TickOrInsect