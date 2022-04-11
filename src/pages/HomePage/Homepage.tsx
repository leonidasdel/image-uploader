import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
    const [step, setStep] = useState(1)

    const handleUpload = async (image: any) => {
        setStep(2)
        const payload = new FormData()
        payload.append('image', image);
        //logs formData beautifully
        console.log(Object.fromEntries(payload))
    };

    return (
        <ImageUploader step={step} onImageUpload={(image) => handleUpload(image)} fileTypes="image/*" fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" />
    )
}

export default HomePage;