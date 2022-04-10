import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import Loading from '../../components/Loading/Loading';

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
        !isImageUploading
        ? <ImageUploader onImageUpload={(image) => handleUpload(image)} fileTypes="image/*" fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" />
        : <Loading title="Uploading..." />

    )
}

export default HomePage;