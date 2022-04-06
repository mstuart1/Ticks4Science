import React, { useEffect, useState } from 'react'

const UploadImages = () => {
    const [images, setImages] = useState([])
    const [imageUrls, setImageUrls] = useState([])

    console.log(imageUrls)

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageUrls(newImageUrls)
        
    }, [images]);


    const handleChange = evt => {
        setImages([...evt.target.files])
    }

  return (
    <div>
        {images.length < 3 && (
            <input type='file' multiple accept='image/*' onChange={handleChange} required/>
        )} 
        
        { imageUrls.map(imageSrc => <img src={imageSrc} style={{maxWidth: '300px'}} />) }
    </div>
  )
}

export default UploadImages