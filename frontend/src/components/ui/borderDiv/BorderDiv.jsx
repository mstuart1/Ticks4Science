import React from 'react'
import styled from 'styled-components';

const BorderDiv = () => {

const Styles = {
    BorderDiv: styled.div`
    margin: 1rem;
    height: 2px;
    background-color: ${({theme}) => theme.colors.grey3};
    width: 90%;
    `,
}
  return (
    <Styles.BorderDiv/>
  )
}

export default BorderDiv