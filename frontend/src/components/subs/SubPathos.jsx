import React from 'react'

const SubPathos = ({ data }) => {

    // console.log('SubPathos data: ', data)

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
                    <h3>
                        Your tick's pathogen-testing results:
                    </h3>
                    <ul>
                        {pathogenData.map(pathogen => (
                            <li key={pathogen.id}><em>{pathogen.name}</em> - {pathogen.submission_pathogen?.result === 'pending' ? 'Testing in progress; check back for results' : pathogen.submission_pathogen?.result}</li>)
                        )}
                    </ul>
                </>
            )
        } else {
            return <p>We are currently testing only for the most common virus, bacteria and parasites transmitted by ticks in NJ, none of which are known to be associated with {data.specimen.common} (<em>{data.specimen.scientific}</em>). Although your tick will not be tested for pathogens we would greatly appreciate if you still sent us your tick as it will be used for educational purposes!</p>
        }
    }
    let pathElems = createPathElems()
    return pathElems
}

export default SubPathos