import styled from "styled-components";

export const ScreenContainer = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background-color: black;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1366px;
  a:link,
  a:visited,
  a:hover {
    color: white;
    text-decoration: none;
    font-size: 1em;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3em 0.75em 1em 0.75em;
  background: #000;
`;

export const StyledLogo = styled.div`
  img {
    width: 13em;
  }
`;

export const StyledMenu = styled.div`
  li {
    display: inline;
    margin-right: 2em;
    font-size: 0.75em;
    padding-right: 2em;
    border-right: 0.25px solid grey;
  }
`;
export const FooterMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 0.25px solid grey;
  justify-content: space-evenly;
`;
export const SingleMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  color: white;
  font-size: 0.75em;
  font-weight: 200;
  line-height: 4em;
//   height: 400px;
//   flex-wrap: wrap;
`;
export const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.75em;
p {
    text-align: center;
}
`;
