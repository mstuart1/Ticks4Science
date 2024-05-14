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
    <Link className={styles.card} to={seeTickPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={200} height={300} src={seeTickImg}/>
        </div></Link>
    <Link className={styles.card} to={freeTestPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={200} height={300} src={freeTestImg}/>
        </div></Link>
    <Link className={styles.card} to={njTicksPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={200} height={300} src={njTicksImg}/>
        </div></Link>
    <Link className={styles.card} to={tickMisconPdf} target="_blank"><div>
        <img alt={'infographic about ticks in new jersey'} className={styles.img} width={200} height={300} src={tickMisconImg}/>
        </div></Link>
    </div>
  )
}

export default Education