import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RenderIf from '../../../tools/RenderIf'

const Styles = {
  ImageCard: styled.img`
  border-radius: 0.5rem;
  max-width: 300px;
  margin: 1rem;
  `,
  ImgCont: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `,
}


const ImageInput = ({maxNumImages = 2}) => {
    const [images, setImages] = useState([])
    const [imgUrls, setImgUrls] = useState([]);
    
    useEffect(() => {
        // if (images.length < 1 || images.length >= 2) return;
        let freshImgUrls = [];
        
        images.forEach(image => freshImgUrls.push(URL.createObjectURL(image)))
        setImgUrls(freshImgUrls)
    }, [images])

   
    const handleImageChange = evt => {
        setImages(prevState => ([...evt.target.files]))
    }

  return (
   <Styles.ImgCont>
   <RenderIf isTrue={images.length < maxNumImages}>
    <h3>To upload multiple images, please select all of the images from your file system while the selection window is open by holding ctrl on windows or cmd on mac.</h3>
    <input type='file' multiple accept='image/*' onChange={handleImageChange} />
    </RenderIf>
   <RenderIf isTrue={images.length >= maxNumImages}>
    <h3>You have selected the maximum allowed number of images</h3>
    </RenderIf>
   {imgUrls.map((imgSrc, i) => <Styles.ImageCard key={i} src={imgSrc} alt='uploaded item' />)}
   </Styles.ImgCont>
    
  )
}

export default ImageInput