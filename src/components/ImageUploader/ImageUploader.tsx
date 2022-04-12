import React, { useState, useEffect } from 'react';

import { substringItem } from '../../utils/helper_functions';

import './ImageUploader.scss'
import dropzone_image from '../../assets/images/file_dropzone.svg'
import tick_box_green from '../../assets/images/tick_box_green.png';

interface fileProps {
    fileTypes: string;
    fileTypesHeader: string;
    fileTypesCaption: string;
    fileDropZoneCaption: string;
    fileLink: string;
    imagePreview: string;
    isImageUploaded: boolean;
    onImageUpload: (image: any) => void;
}

const ImageUploader = ({ fileTypes,fileTypesHeader, fileTypesCaption, fileDropZoneCaption, fileLink, isImageUploaded, imagePreview, onImageUpload }: fileProps) => {

    const [highlight, setHighlight] = useState(false);

    const handleEnter = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("enter!");
        setHighlight(true);
    };

    const handleOver = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("over!");
        setHighlight(true);
    };

    const handleLeave = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("leave!");
        setHighlight(false);
    };

    const handleUpload = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("drop!");
        setHighlight(false);

        const [file] = e.target.files || e.dataTransfer.files;
        console.log(file)
        onImageUpload(file)
    };



    return (
        <div className='container'>
        {isImageUploaded ? <img className="container_success_image" draggable="false" src={tick_box_green} /> : null}
        <h1 className='container_header'>{isImageUploaded ? 'Uploaded Successfully!' : fileTypesHeader}</h1>
        {isImageUploaded ? null : <h2 className='container_header_sub'>{fileTypesCaption}</h2>}
        <div style={{border: highlight || isImageUploaded ? 'none' : '', outline: highlight && !isImageUploaded ? '4px solid  #2F80ED' : 'none'} } 
            className="container_dropzone"
            onDragEnter={(e) => handleEnter(e)}
            onDragLeave={(e) => handleLeave(e)}
            onDragOver={(e) => handleOver(e)}
            onDrop={(e) => handleUpload(e)}
        >
            <img className={`container_dropzone_image ${isImageUploaded ? 'size-helper' : null}`} draggable="false" src={isImageUploaded ? imagePreview : dropzone_image} />
            {isImageUploaded ? null : <h2 className='container_dropzone_text'>{fileDropZoneCaption}</h2> }
        </div>
        {isImageUploaded ? null : <h6 className='container_sub_text'>Or</h6> }
        <div className={`container_upload ${isImageUploaded ? 'border-helper' : null}`}>
            {isImageUploaded ? <h3 className='container_upload_link'>{ substringItem(fileLink, 0, 50, '...') }</h3> : null}
            <label onClick={() =>  isImageUploaded ? navigator.clipboard.writeText(fileLink) : null} htmlFor={ isImageUploaded ? 'container_upload_copy' : 'container_upload_input'} className={`container_upload_button ${isImageUploaded ? 'position-helper' : null}`}>
                {isImageUploaded ? 'Copy Link' : 'Choose a file'}
            </label>
            <input id={ isImageUploaded ? 'container_upload_copy' : 'container_upload_input'} className='container_upload_input' type={`${isImageUploaded ? 'input' : 'file'}`} />
        </div>
    </div>
    );
}

export default ImageUploader;
