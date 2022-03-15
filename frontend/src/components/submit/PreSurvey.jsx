import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
width: 1366px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Source Sans Pro', sans-serif;
`
const ParaStyled = styled.h3`
width: 800px;
`

const PreSurvey = () => {

    const navigate = useNavigate()

  return (
    <PageContainer>
      <ParaStyled>
        Please note that this is a program designed to identify NJ ticks and
        tick-borne illnesses.</ParaStyled><ParaStyled>
        
        This is not a program to diagnose tick-borne
        illnesses.</ParaStyled><ParaStyled> If you believe to have a tick-borne illness, seek medical
        attention.</ParaStyled><ParaStyled> The pictures and tick submissions become the property of NJ
        Ticks for Science! and the Center for Vector Biology at Rutgers
        University and may be used in the website's photo gallery or other forms
        of publication. </ParaStyled><ParaStyled>By clicking “I UNDERSTAND”, you agree to these terms and
        can continue to the form.
      </ParaStyled>
      <a href='https://arcg.is/1ODG9m0'><button>I UNDERSTAND, continue to form</button></a>
    </PageContainer>
    // 
  );
};

export default PreSurvey;
