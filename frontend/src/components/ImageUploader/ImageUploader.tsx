import React, { useState, useEffect } from 'react';
import './ImageUploader.scss'

interface fileProps {
    fileTypes: string;
}

const ImageUploader = ({fileTypes}:fileProps) => {

    function dragOver(ev:any) {

        ev.preventDefault();
      
      
      }
      
      
      function dragEnter(ev:any) {
      
      
      }

    return (
        <div className='container'>
            <div id="drop_zone"  onDragOver={dragOver} onDragEnter={dragEnter}  >
                <p>Drag one or more files to this Drop Zone ...</p>
            </div>

        </div>
    );
}

export default ImageUploader;
