// <script src='https://survey123.arcgis.com/api/jsapi'></script> // might need to add this to public html as of Mar 2022 there is no import...survey in js api - can you import it as a portal item?

// <div id='surveyDiv'></div>

/* === CSS ===
html, body {
    width: 100%;
    height: 100%;
}

#surveyDiv {
    width: 100%;
}
*/

/* Button click to show form...
export const buttonClicked = () => {
    button.style.display='none';
    showSurvey(tickId)
}
*/

import {} from '@arcgis/core/assets/esri/widgets/'


let webform;

export const showSurvey = (tickId) => {
    webform = new Survey123WebForm({
        clientId: 'PGc01cee6eOhCY3A', // arcgis Developer dashboard - Oauth 2.0
        container: 'surveyDiv', // points to id of div for survey
        itemId: '6b0c6fb4b2e94a5889bacc21f776b8b1', // portal item type id for tick survey,
        defaultQuestionValue: {tick_id: tickId},
        hideElements: ['theme', 
        'navbar',
        'field:tick_id',
    ], // hiding the theme, hiding the navbar so they can't sign themselves out, showing example of how to hide the tick_id field
    // onFormLoaded: (data) => {window.alert('hello form!')}, // function when form loads - possibilities are onFormLoaded, onFormSubmitted, onFormResized, onQuestionValueChanged
    onFormLoaded: (data) => {
        // check to see if browser supports geolocation
        if(navigator.geolocation){
            // get location from browser
            navigator.geolocation.getCurrentPosition(position => {
                // set location
                webform.setGeopoint({
                    x: position.coords.longitude,
                    y: position.coords.latitude,
                })
            }, () => {console.error('Unable to retrieve your location')})
        } else {
            console.error('Geolocation is not supported by your browser')
        }
    }
    })
}





