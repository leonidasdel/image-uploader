import React from 'react';
import ImageUploader from './components/ImageUploader/ImageUploader';


function App() {
    return (
        <div className="App">
          <ImageUploader fileTypes="image/*"/>
        </div>
    );
}

export default App;
