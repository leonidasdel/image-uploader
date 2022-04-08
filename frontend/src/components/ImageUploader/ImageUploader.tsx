import React, { useState, useEffect } from 'react';
import './ImageUploader.scss'
import dropzone_image from '../../assets/images/file_dropzone.svg'

interface fileProps {
    fileTypes: string;
    fileTypesCaption: string;
    fileDropZoneCaption: string;
}

const ImageUploader = ({ fileTypes, fileTypesCaption, fileDropZoneCaption }: fileProps) => {

    function dragOver(ev: any) {

        ev.preventDefault();


    }


    function dragEnter(ev: any) {


    }

    return (
        <div className='container'>
            <h1 className='container_header'>Upload your file</h1>
            <h2 className='container_header_sub'>{fileTypesCaption}</h2>
            <div className="container_dropzone" onDragOver={dragOver} onDragEnter={dragEnter}  >
                <img className="container_dropzone_image" draggable="false" src={dropzone_image} />
                <h2 className='container_dropzone_text'>{fileDropZoneCaption}</h2>
            </div>
            <h6 className='container_sub_text'>Or</h6>
            <div className='container_upload'>
                <label htmlFor='container_upload_input' className='container_upload_button'>
                    Choose a file
                </label>
                <input id='container_upload_input' className='container_upload_input' type="file" />
            </div>
        </div>
    );
}

export default ImageUploader;
