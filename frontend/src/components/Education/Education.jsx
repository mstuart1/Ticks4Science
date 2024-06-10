import React from 'react'
import seeTickPdf from './seeTick.pdf'
import freeTestPdf from './freeTest.pdf'
import njTicksPdf from './njTicks.pdf'
import tickMisconPdf from './tickMiscon.pdf'
import seeTickImg from './seeTick.png'
import freeTestImg from './freeTest.png'
import njTicksImg from './njTicks.png'
import tickMisconImg from './tickMiscon.png'
import { Link } from 'react-router-dom'
import styles from './Education.module.css'


const Education = () => {
  return (
    <div className={styles.pageCont}>
    <Link className={styles.card} to={tickMisconPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} 
        width={300}
         src={tickMisconImg}/>
        <p className={styles.title}>NJT4S! Brochure (Front)</p>
        </div></Link>
    <Link className={styles.card} to={njTicksPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={300} 
        // height={300}
         src={njTicksImg}/>
        <p className={styles.title}>NJT4S! Brochure (Back)</p>
        </div></Link>
    <Link className={styles.card} to={freeTestPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={300}
        //  height={300} 
         src={freeTestImg}/>
        <p className={styles.title}>NJT4S! General Flyer</p>
        </div></Link>
    <Link className={styles.card} to={seeTickPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={300}
        //  height={300} 
         src={seeTickImg}/>
        <p className={styles.title}>NJT4S! How to Send in a Tick Flyer</p>
        </div></Link>
    </div>
  )
}

export default Education