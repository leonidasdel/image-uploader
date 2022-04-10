import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

const HomePage = () => {

    const handleUpload = async (image:any) => {
        const payload  = new FormData().append('image',image);
        console.log(payload)
    };

    return (
        <ImageUploader onImageUpload={() => handleUpload} fileTypes="image/*" fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here"/>
    )
}

export default HomePage;