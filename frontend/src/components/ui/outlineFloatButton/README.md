# Outline Float Button

A button that has a box shadow and and outline with a faded background color that floats above the page

## Props 
- colors: object
    - text: button text color, default is black
    - shadow: a hex value for shadow, default is black
    - bg: button color and outline color, default is grey, the background will be 30% of the outline
- handleClick - what to do with the button, see ticks question button for an external link
- width: set button width, default is '' with the expectation that padding will auto set the width depending on text length
- height: set button height, default is '' with the expectation that padding will auto set the height depending on text length
- padding: to allow the button to grow based on text length, default is '2rem 4rem'
- text: the button text, default is 'click here'