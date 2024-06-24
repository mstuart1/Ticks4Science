import React from 'react'
// import { useSearchParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import HoverCard from '../ui/hoverCard/HoverCard'


const MissingId = () => {
    // const [searchParams] = useSearchParams()
    // let id = searchParams.get('id')

    return (
        <BasicPage.Text>
            {/* <h1 style={{ fontSize: '6rem', color: theme.colors.ruRed, textAlign: 'center' }}>Write this number down or take a screenshot.</h1> */}
            {/* <h1 style={{ fontSize: '6rem' }}>{id}</h1> */}
            <BasicPage.Title>Once the survey has been submitted, you will see an ID number on the screen.</BasicPage.Title>
            <BasicPage.SectionTitle>You must have this number to access your tick submission.</BasicPage.SectionTitle><br /><br />
            <BasicPage.SectionTitle>Because the survey is anonymous the only way to track your tick is with this number.</BasicPage.SectionTitle><br /><br />
            <BasicPage.SectionTitle>If you lost the number, re-submit the survey with the same photos.  Put in the comments that you are re-submitting because you lost your id number.  Make sure to save the number that you get when you re-submit the survey.</BasicPage.SectionTitle><br /><br />


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
            <h2>You could also take a screenshot of the page.</h2>

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
            </p>

        </BasicPage.Text >
    )
}

export default MissingId