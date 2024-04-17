import React from "react";
import tickIntro from '../../images/scap1.jpeg'
import InternalLinkFloatButton from '../ui/internalLinkFloatButton/InternalLinkFloatButton'
import { theme } from '../../theme'
import logo from '../../images/Logo2023.png'
import LearnMore from "../ui/learnMore/LearnMore";
import OutlineFloatButton from "../ui/outlineFloatButton/OutlineFloatButton";
import { useNavigate } from "react-router-dom";
import styles from './About.module.css'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.centerCol}>
      <div className={styles.centerCont}>

        <div className={styles.leftAlignCont}>

          <div className={styles.title}>
            Welcome to NJ Ticks 4 Science!
          </div>
          <div className={styles.introCont}>
            <div className={styles.logo}>
              <img src={logo} alt='NJ ticks for science logo' />
            </div>
            <div>
              <p className={styles.para}>
                "NJ Ticks 4 Science!" is a citizen science project organized by the Rutgers Center for
                Vector Biology. Our goal is to create a tick map showing the changing distribution of
                ticks and tick-borne pathogens in NJ and bring more awareness to tick-borne disease. If
                you encounter a tick in New Jersey, you can send it to us and we will test it for disease-causing pathogens for free! With your help, we will learn where and when people are
                exposed to ticks and tick-borne diseases.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.centerCont}>
        <div className={styles.centerCol}>
          <h3 className={styles.sectionTitle}>Get Started</h3>
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/steps' text='Send us your ticks!' />
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/checkMenu' text='Tick Prevention' />
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/removal' text='Tick Removal' />


          <h3 className={styles.sectionTitle}>If you have already submitted ticks </h3>
          <OutlineFloatButton colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: theme.colors.ruTeal }} handleClick={() => navigate('/progress')} text='Track your progress'
          />
        </div>

        <div className={styles.imgCont}>
          <figure>
            <img src={tickIntro} alt='ticks' />
            <figcaption>Photo of a female blacklegged tick (sometimes called “deer tick”), (photo credit Jim Occi, PhD).
            </figcaption>
          </figure>
        </div>

      </div>
      <LearnMore />

    </div>
  );
};

export default About;


