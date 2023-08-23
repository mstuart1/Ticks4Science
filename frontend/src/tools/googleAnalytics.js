import ReactGA from 'react-ga'

export const useAnalyticsEventTracker = (category = "Blog Category") => {
    const eventTracker = (action = 'test action', label = 'test label') => {
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}

export const addGaScript = () => {
    const gaScript = document.createElement('script')
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING}`
    document.body.append(gaScript)

}

export const createWindowGTag = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag;
    gtag('js', new Date())

    gtag('config', process.env.REACT_APP_GA_TRACKING)
}




// < !--Google tag(gtag.js)-- >
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-ND8BXZNE35"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-ND8BXZNE35');
// </script> * /}