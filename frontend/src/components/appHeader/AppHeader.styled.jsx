import styled from 'styled-components'

export const ScreenContainer = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background-color: #eead29;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1366px;
  a:link,
  a:visited,
  a:hover {
    color: black;
    text-decoration: none;
    font-size: 1em;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export const StyledMenu = styled.div`
li {
    display: inline;
    margin-right: 2em;
    font-size: 1.25em;
}
`