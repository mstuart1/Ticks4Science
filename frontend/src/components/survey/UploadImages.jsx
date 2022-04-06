import React, { useState } from 'react'

const UploadImages = () => {
    const [images, setImages] = useState([])

    const handleChange = evt => {
        setImages([...evt.target.files])
    }

  return (
    <div>
        <input type='file' multiple accept='image/*' onChange={handleChange}/>
    </div>
  )
}

export default UploadImages