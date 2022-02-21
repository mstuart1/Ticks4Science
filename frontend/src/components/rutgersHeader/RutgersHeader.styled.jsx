import styled from 'styled-components'

export const WidthContainer = styled.div`
width: 1366px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const StyledHeader = styled.div`
display: flex;
justify-content: center;

font-family: 'Source Sans Pro', sans-serif;

width: 100%;
padding: 0.25em 0.75em;
background: #fff;
a:link,
a:visited,
a:hover {
    color: black;
    text-decoration: none;
    font-size: 1em;
    // /* background: #c03; */
}
a:hover {
    text-decoration: underline;
}
`
export const StyledLogo = styled.div`
img {
    width: 17em;  
    max-width: 464px; 
}
`
export const StyledMenu = styled.div`
li {
    display: inline;
    margin-right: 2em;
    font-size: 0.75em;
}
`