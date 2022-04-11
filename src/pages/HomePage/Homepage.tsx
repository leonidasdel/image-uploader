import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
    const [isImageUploading, setIsImageUploading] = useState(false)
    const [isImageUploaded, setIsImageUploaded] = useState(false)
    const [fileLink, setFilelink] = useState('https://locahost:7070')

    const handleUpload = async (image: any) => {
        setIsImageUploading(true)
        const payload = new FormData()
        payload.append('image', image);
        
        setTimeout(()=>{
            setIsImageUploading(false);
            setIsImageUploaded(true);}
        ,3000)
    };

    return (
        isImageUploading 
        ? <Loading title='Uploading...' /> 
        : <ImageUploader isImageUploaded={isImageUploaded} onImageUpload={(image) => handleUpload(image)} fileTypes="image/*" fileTypesHeader='Upload your image' fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" fileLink={fileLink} />
    )
}

export default HomePage;