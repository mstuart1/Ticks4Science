import React from 'react'
import styled from 'styled-components'
import CircleButton from '../circleButton/CircleButton'
import { FaStar } from 'react-icons/fa'
import { theme } from '../../../theme'
import { useNavigate } from 'react-router-dom'

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

    border-radius: 1rem;
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    margin: 1rem;
    background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('${({ tickImage }) => tickImage}');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
  }
    `,

}

const ImageCard = ({ tick }) => {
    const navigate = useNavigate();
    return (
        <Styles.Container onClick={() => navigate(`/ticks/${tick.id}`)} >
            <Styles.HoverCard tickImage={tick.featureImgUrl} width={'20rem'} height={'20rem'}>
                <Styles.UpperRight>
                    <CircleButton active={tick.peopleTick} sizePx='20px' colors={{ bg: theme.colors.grey0 }} icon={<FaStar color={theme.colors.ruYellow} />} />
                </Styles.UpperRight>
                <Styles.Content >
                    <span><i>{tick.scientific}</i></span>
                    <span>{tick.common}</span>
                </Styles.Content>
            </Styles.HoverCard>
        </Styles.Container>
    )
}

export default ImageCard

// inspired by https://imagekit.io/blog/css-image-overlay/