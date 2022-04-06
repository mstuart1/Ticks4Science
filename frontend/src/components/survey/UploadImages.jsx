import React, { useEffect, useState } from 'react'

const UploadImages = () => {
    const [imageFront, setImageFront] = useState([])
    const [imageBack, setImageBack] = useState([])
    const [imageOther, setImageOther] = useState([])
    const [imageUrls, setImageUrls] = useState([])

    useEffect(() => {
        if (imageFront.length < 1) return;
        const newImageUrls = [];
        imageFront.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        imageBack.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        imageOther.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageUrls(newImageUrls)
        
    }, [imageFront, imageBack, imageOther]);


    const handleFront = evt => {
        setImageFront([...evt.target.files])
    }
    const handleBack = evt => {
        setImageBack([...evt.target.files])
    }
    const handleOther = evt => {
        setImageOther([...evt.target.files])
    }
console.log(imageUrls)
  return (
    <div>
            <label htmlFor='front'>Photo of top side</label>
            <input type='file'accept='image/*' onChange={handleFront} required id='front'/>
            <label htmlFor='back'>Photo of head</label>
            <input type='file'accept='image/*' onChange={handleBack} required id='back'/>
            <label htmlFor='other'>Any additional photo of tick</label>
            <input type='file'accept='image/*' onChange={handleOther} required id='other'/>
        
        
        { imageUrls.map((imageSrc, i) => <img key={i} src={imageSrc} style={{maxWidth: '300px'}} />) }
    </div>
  )
}

export default UploadImages