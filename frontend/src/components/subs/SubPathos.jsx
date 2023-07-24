import React from 'react'

const SubPathos = ({ data }) => {

    let pathogenData = []
    if (data?.pathogens?.length) {
        pathogenData = data?.pathogens
    } else if (data?.specimen?.pathogens?.length) {
        pathogenData = data?.specimen?.pathogens
    }

    const createPathElems = () => {
        if (pathogenData.length) {
            return (
                <>
            <p>
            Your tick will be tested for the following pathogens.  The results will be posted here when they are available.
            </p>
            <ul>
                { pathogenData.map(pathogen => (
                <li key={pathogen.id}><em>{pathogen.name}</em> - {pathogen.submission_pathogen?.result}</li>)
            )}
            </ul>
            </>
           )
        } else {
            return <p>We are currently not testing this species of tick for pathogens at this time.</p>
        }
    }
    let pathElems = createPathElems()
    return pathElems
}

export default SubPathos