import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'

const ThankYou = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    return (
        <BasicPage.Text>
            <BasicPage.Title>Thank you for your submission!</BasicPage.Title>
            <BasicPage.SectionTitle>Your personalized tick id number is {id}.<br/><br/>
            Bookmark or write down this website to access your tick progress: <BasicPage.InnieLink to={`/progress/${id}`}><span>https://ticks.rutgers.edu/progress/{id}</span></BasicPage.InnieLink></BasicPage.SectionTitle>
            <p>
                One of our tick experts will be examining the submitted photos and information about your tick! Be sure to save your personalized Tick ID number from your Tick Submission Form! You will use this number to access the website to check your progress. </p><p>
                A message with the following steps, including specialized instructions on how to handle your tick after our tick experts have finished reviewing your submission, will be included on the website.
            </p><p>
                Remember to keep the tick in a plastic bag and place the specimen in the refrigerator to keep preserved until being contacted.</p><p>
                Remember to check back in, as instructions may include continuing your participation with NJ Ticks for Science by sending your tick to the Center for Vector Biology at Rutgers University!
            </p><p>
                Thank you again for your submission and support towards this program!

            </p>
        </BasicPage.Text>
    )
}

export default ThankYou