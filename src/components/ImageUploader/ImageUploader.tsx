import React, { useState, useEffect } from 'react';
import './ImageUploader.scss'
import dropzone_image from '../../assets/images/file_dropzone.svg'
import Loading from '../Loading/Loading';

interface fileProps {
    fileTypes: string;
    fileTypesCaption: string;
    fileDropZoneCaption: string;
    step: number;
    onImageUpload: (image: any) => void;
}

const ImageUploader = ({ fileTypes, fileTypesCaption, fileDropZoneCaption, step, onImageUpload }: fileProps) => {

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

    const renderComponent = () => {
        switch(step) {
            case 2: return <Loading title='Uploading...' /> 
            case 3:    
            default: return (   <div className='container'>
                                    <h1 className='container_header'>Upload your file</h1>
                                    <h2 className='container_header_sub'>{fileTypesCaption}</h2>
                                    <div style={{border: highlight ? 'none' : '', outline: highlight ? '4px solid  #2F80ED' : 'none'} } 
                                        className="container_dropzone"
                                        onDragEnter={(e) => handleEnter(e)}
                                        onDragLeave={(e) => handleLeave(e)}
                                        onDragOver={(e) => handleOver(e)}
                                        onDrop={(e) => handleUpload(e)}
                                    >
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
                            )
        }
    }


    return (
       renderComponent()
    );
}

export default ImageUploader;
