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
`

}


const TickRemoval = ()=> {
    return (
        <RemovalPage.Container>
            <RemovalPage.Title>Tick Removal</RemovalPage.Title>
            <RemovalPage.Para>As citizen scientists, when encountering ticks, one of the tools you may have readily available to remove a tick are tweezers.</RemovalPage.Para>
            <ol><RemovalPage.Para>To properly remove a tick so it is removed intact:</RemovalPage.Para>
                <li>
                    Place the tweezers as close to the skin as possible and grasp the tick
                </li>
                <li>
                    <p>Pull upwards making sure not to use any other motion than a steady pull. Doing something such as a jerk can cause the tick to separate and remain in the wound</p><p>
                        The key is to BE PATIENT! The mouthpart is what you want to remove from the bite area, which the tick firmly secured itself into place there. If the mouthpart does stay in the wound when you remove the tick's body, be sure to go back to remove the mouthpart or seek medical assistance if necessary. You will know if the mouthpart is still in the wound if you see black lines after removing the tick.</p>

                </li>
                <li>Once the tick is removed, place the tick in a crush proof container and follow the <Link to='/steps'>Steps to Participate</Link> in NJ Ticks 4 Science!
                </li>
                <li>
                    Importantly, clean the bite wound with rubbing alcohol and wash your hands and tweezers with soap and water once you have removing all the ticks you have found and completing your <Link to='/check'>Tick Check</Link>.

                </li>
            </ol>
            <p>If you experience any symptoms such as a rash, fever, headache, or flu-like symptoms after the tick bite or cannot remove the whole tick, seek medical attention.
            </p>
        </RemovalPage.Container>
    )
}

export default TickRemoval