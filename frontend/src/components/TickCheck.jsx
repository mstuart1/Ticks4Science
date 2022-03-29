import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RemovalPage = {
Container: styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.1em;
padding: 2em;

li {
    padding: 1em 0;
}
`,
Title: styled.h2`
font-size: 3rem;
font-weight: 700;
`,
Para: styled.p`
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;

`

}


const TickCheck = ()=> {
    return (
        <RemovalPage.Container>
            <RemovalPage.Title>Tick Checks</RemovalPage.Title>
            <RemovalPage.Para>The most effective way to know if you have a tick is to check yourself and your pets after spending time outside. Practicing thorough tick checks is essential because ticks can take anywhere between 15 minutes to several hours to find a spot they like. There are three levels of checks to perform given how deceptive ticks can be.</RemovalPage.Para>
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
            <RemovalPage.Para>
            <span>Don't forget about your pet!</span><br/>
	Checking your pet and even giving them a rinse is important 
because some ticks may attach to them. Regularly check your dog or outdoor cat even if your pet is on a preventative. Inspection sites can include under the collar, under the tail, inside the groin area, between the toes, under the front legs, and elbows.

            </RemovalPage.Para>
            <RemovalPage.Para>
                To learn more, check out <Link to='/removal'>Tick Removal</Link>
            </RemovalPage.Para>
            <RemovalPage.Para>
            Even though we can check ourselves and our pets for ticks after adventures, we should consider taking necessary steps toward personal and pet <Link to='/notReady'>Tick Prevention</Link> to ensure our safety from common <Link to='/notReady'>Tick-borne Illnesses</Link> in New Jersey.
            </RemovalPage.Para>
           
        </RemovalPage.Container>
    )
}

export default TickCheck