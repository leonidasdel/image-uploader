import React from 'react';
import ImageUploader from './components/ImageUploader/ImageUploader';


function App() {
    return (
        <div className="App">
          <ImageUploader fileTypes="image/*" fileTypesCaption='Your file must be an image...' fileDropZoneCaption="Drag and drop your image here" />
        </div>
    );
}

export default App;
