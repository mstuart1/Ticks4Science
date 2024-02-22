import React from 'react'
import {
    //  useSearchParams,
     useLocation } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import { theme } from '../../theme'
import HoverCard from '../ui/hoverCard/HoverCard'

const ThankYou = () => {
    // const [searchParams] = useSearchParams()
    // let id = searchParams.get('id')

    const location = useLocation()
    let id = location.state?.id || ""
    
    if (typeof id === 'object') {
        id = id.join(', ')
    }

    return (
        <BasicPage.Text>
            <h1 style={{ fontSize: '6rem', color: theme.colors.ruRed, textAlign: 'center' }}>Write this number down or take a screenshot.</h1>
            <h1 style={{ fontSize: '6rem' }}>{id}</h1>
            <BasicPage.Title>Thank you for your submission!</BasicPage.Title>
            <BasicPage.SectionTitle>Your personalized tick id number is {id}.</BasicPage.SectionTitle><br /><br />
            <BasicPage.SectionTitle><span style={{ color: theme.colors.ruRed, textAlign: 'center' }}>Mail your tick to the Center for Vector Biology</span><br/><span style={{ color: theme.colors.ruRed, textAlign: 'center' }}>180 Jones Ave, New Brunswick, NJ 08901</span></BasicPage.SectionTitle><br />
            <BasicPage.SectionTitle><span style={{ color: theme.colors.ruRed, textAlign: 'center' }}>You MUST include this number in your tick mail!</span></BasicPage.SectionTitle><br /><br />
            <BasicPage.SectionTitle>If the tick ID number is not included in the tick mail you will not be able to receive the pathogen-testing results.</BasicPage.SectionTitle><br /><br />
            <BasicPage.SectionTitle>Make sure to keep a copy of your tick ID for yourself so you continue to check your tick's progress.</BasicPage.SectionTitle><br /><br />
            
            <div style={{ display: 'flex' }}>


                <HoverCard>
                    <div style={{ padding: '1rem' }}>
                        <h3>With this id you can:</h3>
                        <ul >
                            <li>check the progress of your tick submission</li>
                            <li>get instructions to mail us your tick</li>
                            <li>find out if your mailed in tick was tested for any pathogens</li>
                            <li>(coming soon) ask us questions about your tick</li>
                        </ul>
                    </div>
                </HoverCard>

                <HoverCard >
                    <div style={{ padding: '1rem' }}>
                        <h3>Ways to save your id</h3>
                        <ul style={{ fontWeight: 'bold' }}>
                            <li >write it down</li>
                            <li >take a screenshot</li>
                            <li >bookmark this page</li>
                        </ul>
                    </div>
                </HoverCard>

            </div >




            <br />
            <h2>You must write down this number to access your tick submission!</h2>
            <h2>You could also take a screenshot of this page.</h2>

            {/* <h2><link</h2> */}
            <p>
                One of our tick experts will be examining the submitted photos and information about your tick! Be sure to save your personalized Tick ID number from your Tick Submission Form! You will use this number to access the website to check your progress.
            </p><p>
                A message with the following steps, including specialized instructions on how to handle your tick after our tick experts have finished reviewing your submission, will be included on the website.
            </p><p>
                Remember to keep the tick in a sealed plastic bag and place it in the refrigerator or freezer for preservation.
            </p><p>
                {/* We are currently building a website for you to check back for messages regarding your tick. */}
                Once your photo has been processed, you will see a message on the website with instructions to continue your participation with NJ Ticks 4 Science by sending your tick to the Center for Vector Biology at Rutgers University!
            </p><p>
                Thank you again for your submission and your support of this program!
            </p>
        </BasicPage.Text >
    )
}

export default ThankYou