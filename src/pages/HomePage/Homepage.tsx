import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

const HomePage = () => {
    const [isImageUploading, setIsImageUploading] = useState(false)

    const handleUpload = async (image: any) => {
        setIsImageUploading(true)
        const payload = new FormData()
        payload.append('image', image);
        //logs formData beautifully
        console.log(Object.fromEntries(payload))
    };

    return (
        !isImageUploading ?
            <ImageUploader onImageUpload={(image) => handleUpload(image)} fileTypes="image/*" fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" />
            : <h1>image uploading!</h1>

    )
}

export default HomePage;