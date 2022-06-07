import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const BasicPage = {

  ScreenContainer: styled.div`
  background-color: ${({bgColor}) => bgColor || 'white'} ;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  `,
  PageContainer: styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  
  @media screen and (min-width:${({ theme }) => theme.mobile}) {
    max-width: 1366px;
  }
`,
  Text: styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.4em;
margin: 1rem;
min-height: 80vh;
p {
  margin: 2rem;
  padding: 1rem;
}

li {
  padding: 1em 0;
}
@media screen and (min-width: 810px) {
  width: 800px;
  text-align: left;
  
}
`,
  Title: styled.h2`
font-size: 2.5rem;
font-weight: 700;
text-align: center;
margin: 1rem;
`,
  BoxInset: styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
padding: 0.5em;
align-items: center;
border-radius: 0.5em;
margin: 0.5em;
`,

  StyledButton: styled.button`
border-radius: 5rem;
border: none;
box-shadow: 0 0 10px ${({ color }) => color + '50'};
cursor: pointer;
font-size: 1.6rem;
font-weight: 700;
padding: 1.5rem 3rem;
background-color: ${(props) => props.bgColor || props.theme.colors.main};
color: ${({ color }) => color || 'white'};
&:hover {
    opacity: 0.9;
    transform: scale(0.98);
}
margin: 0.6rem 0.6rem 0.6rem 0;

`,
  CenteredList: styled.ul`
list-style: none;
text-align: center;
border-bottom: 1px solid black;
& > li {
  padding: 0.5em 0;
}
`,
  InnieLink: styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.colors.ruTeal};
  span {
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
    //TODO get this hover works with desktop but not mobile - NEED AN ON TOUCH FOR MOBILE
    &:hover {
      border-bottom: 0px;
    }
  }
  `,

  OutieLink: styled.a`
margin: 1rem 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.ruTeal};
  span {
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
    //TODO get this hover works with desktop but not mobile - NEED AN ON TOUCH FOR MOBILE
    &:hover {
      border-bottom: 0px;
    }
  }`,
  SectionTitle: styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem;
  `,
  SectionSubtitle: styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem;
  `,
  CenteredText: styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
  `,

  CardContainer: styled.div`
  margin: 0;
  padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    `,
  HoverCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    margin: 1rem;
    background-color: ${({ bgColor }) => bgColor || 'white'};
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
  }
    `,
  Indent: styled.p`
    margin-left: 3em;
    `,
  ImageCont: styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  figure {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    margin: 2rem;
    img {
      max-width: 300px;
      border-radius: 1rem;
    }
    figcaption {
      width: 100%;
      margin: 1rem;
      font-size: 1.4rem;
      text-align: center;
      caption-side: bottom;
      
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile}) {
      img {max-width: 600px;}
    
    }
  }
  `,
  List: styled.ul`
  width: 60vw;
  // margin-left: 0.75rem;
  // padding: 0 2.5rem;
  list-style-position: inside;
  li {
    padding: 0.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
  margin-left: 0.75rem;
  padding: 0 2.5rem;
  li {
    padding: 0.5rem 2rem;
  }
    
  }

  `,
  CardSpecial: styled.div`
    display: flex;
    gap: 1rem;
    div {
      margin: 1rem;
      width: 60vw;
    }
    `,
  StepSpan: styled.span`
    display: inline-block;
    margin: 1rem;
    `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    

    div {
      display: flex;
      margin: 1rem;
      flex-direction: column;
      // justify-content: space-between;
    }
    
    label {
    line-height: 2.24rem;
    // font-weight: bold;
    margin-top: 2rem;
    font-size: 1.6rem;
    }
    
      input {
        // width: 100%;
        padding: 0.7rem;
        margin: 0.5rem;
        border: 0.5px solid ${({ theme }) => theme.colors.darkGreyBG};
        border-radius: 0.25em;

      }
      input::placeholder,
      input::-webkit-input-placeholder {
        font-size: 1.6rem;
        font-family: inherit;
        color: ${({ theme }) => theme.colors.darkGreyBG};
        opacity: 0.8;
      }
      input:-ms-input-placeholder {
        font-size: 1.6rem;
        font-family: inherit;
        color: ${({ theme }) => theme.colors.main};
        opacity: 0.8;
      }
    `,
  RadioButtons: styled.div`
    display: flex;
    // width: 80vw;
    /*
    Hide radio button (the round disc)
    we will use just the label to create pushbutton effect
  */
    input[type="radio"] {
      display: none;
      // margin:10px;
    }
  
    /*
    Change the look'n'feel of labels (which are adjacent to radiobuttons).
    Add some margin, padding to label
  */
    input[type="radio"] + label {
      margin-top: 0.5rem;
      display: inline-block;
      padding: 0.5rem;
      color: ${({ theme }) => theme.colors.darkGreyBG};
      background-color: #fff;
      border: 0.5px solid ${({ theme }) => theme.colors.darkGreyBG};
    }
    /*
   Change background color for label next to checked radio button
   to make it look like highlighted button
  */
    input[type="radio"]:checked + label {
      background-image: none;
      background-color: ${({ theme }) => theme.colors.ruTeal};
      color: #fff;
    }
    
  `,
  LinkButton: {
  
    LinkSpec: styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.ruTeal};
    
    `,
    CardSpecial: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 22.5rem;
    height: 5rem;
    span {
      padding: 1.6rem;
    }
  `,
  },

}