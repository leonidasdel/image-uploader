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

    const [copyLinkText, setCopyLinkText] = useState('Copy Link')
    const [highlight, setHighlight] = useState(false);

    const handleEnter = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    };

    const handleOver = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    };

    const handleLeave = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
    };

    const handleUpload = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);

        const [file] = e.target.files || e.dataTransfer.files;

        // file.type.split('/').pop() gets the value of a string after last slash 
        if(fileTypes.includes(file.type.split('/').pop())) return onImageUpload(file)

        alert(`Your file must be in one of these types: ${fileTypes}`)
    };

    const handleCopyLink = (e:any) => {
        navigator.clipboard.writeText(fileLink)
        
        e.target.classList.remove("pulse-button-helper")
        e.target.classList.add("pulse-button-helper")
        setCopyLinkText('Copied!')
        setTimeout(() => {
            e.target.classList.remove("pulse-button-helper")
            setCopyLinkText('Copy Link')
        }, 1000);


    }


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
            {isImageUploaded ? <h3 className='container_upload_link'>{ substringItem(fileLink, 0, 45, '...') }</h3> : null}
            <label onClick={(e) =>  isImageUploaded ? handleCopyLink(e) : null} htmlFor={ isImageUploaded ? 'container_upload_copy' : 'container_upload_input'} className={`container_upload_button ${isImageUploaded ? 'position-helper' : null}`}>
                {isImageUploaded ? copyLinkText : 'Choose a file'}
            </label>
            <input accept={isImageUploaded ? undefined : fileTypes } id={ isImageUploaded ? 'container_upload_copy' : 'container_upload_input' } onChange={(e) =>  !isImageUploaded && handleUpload(e)} className='container_upload_input' type={`${isImageUploaded ? 'input' : 'file'}`} />
        </div>
    </div>
    );
}

export default ImageUploader;
