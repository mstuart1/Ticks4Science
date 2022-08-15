import React from 'react'
import styled from 'styled-components'


const Styles = {
    Container: styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
`,
    UpperRight: styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-right: 1rem;
`,
    Content: styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 2rem;
justify-content: flex-end;
white-space: pre-wrap;
font-weight: bold;
`,
    HoverCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

    width: ${({ width }) => width}; 
    height: ${({ height }) => height}; 

    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    margin: 1rem;
    background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${({ image }) => image}');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
  }
    `,

}

const ImageCard = ({ imgUrl, title = 'Enter a title', subTitle='', path }) => {
 
    
    return (
       <a href={path || imgUrl} target='_blank' rel='noreferrer'>
            <Styles.Container >
            <Styles.HoverCard image={imgUrl} width={'20rem'} height={'20rem'}>
                <Styles.Content >
                    <span>{title}</span>
                    <span>{subTitle}</span>
                </Styles.Content>
            </Styles.HoverCard>
        </Styles.Container>
        </a>
    )
}

export default ImageCard

// inspired by https://imagekit.io/blog/css-image-overlay/