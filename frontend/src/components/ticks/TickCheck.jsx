import React from 'react'
import { Link } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'

const TickCheck = ()=> {
    return (
        <BasicPage.Text>
            <BasicPage.Title>Tick Checks</BasicPage.Title>
            <p>The most effective way to know if you have a tick is to check yourself and your pets after spending time outside. Practicing thorough tick checks is essential because ticks can take anywhere between 15 minutes to several hours to find a spot they like. There are three levels of checks to perform given how deceptive ticks can be.</p>
            <ol>
                <li>
                Inspection #1 - Clothing<br/>
Inspect your clothes before entering your home. Another measure is to tumble dry the clothes that were just being worn for 10-15 minutes. 

                </li>
                <li>
                Inspection #2 - Skin<br/>
Ticks enjoy finding warm and dark places to hide, so skimming over the surface of your skin isn't enough. Places such as behind the ears, between toes and fingers, behind the knees, around the ankles, the groin, your hair, and even your belly button are important to look over.


                </li>
                <li>Inspection #3 - In the shower<br/>
When you're taking a shower, this will give you another opportunity to thoroughly inspect your body for ticks, and it may even help wash off ticks that haven't attached yet. 

                </li>
               
            </ol>
            <p>
            <span>Don't forget about your pet!</span><br/>
	Checking your pet and even giving them a rinse is important 
because some ticks may attach to them. Regularly check your dog or outdoor cat even if your pet is on a preventative. Inspection sites can include under the collar, under the tail, inside the groin area, between the toes, under the front legs, and elbows.

            </p>
            <p>
                To learn more, check out <Link to='/removal'>Tick Removal</Link>
            </p>
            <p>
            Even though we can check ourselves and our pets for ticks after adventures, we should consider taking necessary steps toward personal and pet <Link to='/prevention'>Tick Prevention</Link> to ensure our safety from common <Link to='/disease'>Tick-borne Illnesses</Link> in New Jersey.
            </p>
           
        </BasicPage.Text>
    )
}

export default TickCheck