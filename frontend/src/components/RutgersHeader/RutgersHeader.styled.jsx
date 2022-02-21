import styled from 'styled-components'

export const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

font-family: 'Source Sans Pro', sans-serif;

width: 100%;
padding: 0.25em 0.75em;
background: #c03;
a:link,
a:visited,
a:hover {
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    // /* background: #c03; */
}
a:hover {
    text-decoration: underline;
}
`
export const StyledLogo = styled.div`
img {
    width: 10em;  
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