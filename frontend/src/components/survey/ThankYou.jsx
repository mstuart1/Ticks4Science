import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'

const ThankYou = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    return (
        <BasicPage.Text>
            <BasicPage.Title>Thank you for your submission!</BasicPage.Title>
            <BasicPage.SectionTitle>Your personalized tick id number is {id}.<br /><br />
                Bookmark or write down this website to access your tick progress: <BasicPage.InnieLink 
                to={`/`}
                // to={`/progress/${id}`}
                ><span>https://ticks.rutgers.edu/progress/{id}</span></BasicPage.InnieLink></BasicPage.SectionTitle>
            <p>
                One of our tick experts will be examining the submitted photos and information about your tick! Be sure to save your personalized Tick ID number from your Tick Submission Form! You will use this number to access the website to check your progress.
            </p><p>
                A message with the following steps, including specialized instructions on how to handle your tick after our tick experts have finished reviewing your submission, will be included on the website.
            </p><p>
                Remember to keep the tick in a sealed plastic bag and place it in the refrigerator or freezer for preservation.
            </p><p>
                We are currently building a website for you to check back for messages regarding your tick.
                {/* Once your photo has been processed, you will see a message on the website with instructions to continue your participation with NJ Ticks 4 Science by sending your tick to the Center for Vector Biology at Rutgers University! */}
            </p><p>
                Thank you again for your submission and your support of this program!
            </p>
        </BasicPage.Text>
    )
}

export default ThankYou