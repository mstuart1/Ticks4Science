import React from 'react'
import { Link } from 'react-router-dom'
import { BasicPage } from './GeneralStyles'

const Prevention = () => (
        <BasicPage.Text>
            <BasicPage.Title>
                Tick Prevention
            </BasicPage.Title>
            <p>
                New Jersey is home to many outdoor recreation sites, hiking trails, and beautiful scenery. In general, it is said to be common practice to avoid places such as forested greenery and high-grassy areas during warm weathered months because it is tick season. But, if you do love the outdoors and plan on entering tick habitats, it's best to practice safe Tick Prevention strategies for you and your pets so to not contract a <Link to='/disease'>Tick-borne Illness</Link>.
            </p>
            <p>
                <ul>
                    <span>
                        Reading labels is important when apply types of tick repellent:
                    </span>
                    <li>Use repellent that contains 20%-30% DEET, 20%picaridin, or IR3535 on exposed skin, regularly apply every 5 hours</li>
                    <li>Use 0.5% permethrin to treat clothing and gear.</li>
                    <span>There is permethrin-treated clothing or ways to wear everyday clothing to prevent tick bites:
                    </span>
                    <li>
                        Consider wearing long-sleeved shirts, pants, closed-toed shoes, and tuck pants into socks when in woods/forests or tall grassy areas.
                    </li>
                    <span>Don’t forget about your pets!</span>
                    <li>
                        Treat dogs and outside cats for ticks. <Link to='/check'>Tick checks</Link> can be performed on pets and veterinarians can assist you on deciding on the best preventatives for your pets.

                    </li>
                </ul>


            </p>
            <hr />
            <p>
                What is DEET?
            </p>
            <BasicPage.Indent>
                DEET is a synthetic chemical that blocks the ability for biting bugs to smell us.
            </BasicPage.Indent>

            <p>
                What is picaridin?
            </p>
            <BasicPage.Indent>
                Picaridin is a synthetic compound that resembles that of the natural compound piperine or black pepper.
            </BasicPage.Indent>

            <p>
                What is IR3535?
            </p>
            <BasicPage.Indent>
                IR3535 is a biopesticide that can be applied to people and pets.
            </BasicPage.Indent>
            <p>
                What is permethrin?
            </p>
            <BasicPage.Indent>
                Permethrin is an insecticide that can cause biting bugs to have severe reactions when ingested. This product should only be treated on clothes and can be toxic to cats.
            </BasicPage.Indent>
        </BasicPage.Text>
    )


export default Prevention