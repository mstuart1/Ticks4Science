import React, { useEffect, useState } from 'react'



const ImageInput = () => {
    const [images, setImages] = useState([])
    const [imgUrls, setImgUrls] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        let freshImgUrls = [];
        images.forEach(image => freshImgUrls.push(URL.createObjectURL(image)))
        setImgUrls(freshImgUrls)
    }, [images])
    const handleImageChange = evt => {
        setImages(evt.target.files)
    }

    let imageElems = imgUrls.map(source => <img src={source} alt='uploaded item' />)
  return (
    <>
    <input type='file' multiple accept='image/*' onChange={handleImageChange} />
    {imageElems}
    </>
  )
}

export default ImageInput