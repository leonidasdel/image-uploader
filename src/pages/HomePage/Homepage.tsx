import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import Loading from '../../components/Loading/Loading';
import { uploadImage } from '../../services/upload';

const HomePage = () => {
    const [isImageUploading, setIsImageUploading] = useState(false)
    const [isImageUploaded, setIsImageUploaded] = useState(false)
    const [imagePreview,setImagePreview] = useState('')
    const [fileLink, setFilelink] = useState('')

    const handleUpload = async (image: any) => {
        setIsImageUploading(true)
        setImagePreview(URL.createObjectURL(image))
        const payload = new FormData()
        payload.append('file', image);
        const uploadedImage = await uploadImage(payload)
        console.log(uploadedImage);
        setFilelink(uploadedImage.path);
        setTimeout(()=>{
            setIsImageUploading(false);
            setIsImageUploaded(true);}
        ,3000)
    };

    return (
        isImageUploading 
        ? <Loading title='Uploading...' /> 
        : <ImageUploader isImageUploaded={isImageUploaded} imagePreview={imagePreview} onImageUpload={(image) => handleUpload(image)} fileTypes="image/*" fileTypesHeader='Upload your image' fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" fileLink={fileLink} />
    )
}

export default HomePage;