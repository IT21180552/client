import React, { useState,useEffect } from 'react';

const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '20px',
  borderRadius: '10px',
  width: '700px',
  margin: '0 auto',
  marginTop: '100px',
  textAlign: 'center',
  height: '500px',
};

const h1Style = {
  color: '#333',
};

const uploadButtonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  margin: '10px',
  cursor: 'pointer',
};

const centerButtonDiv = {
  display: 'flex',
  justifyContent: 'center',
};

export default function ImageDetect() {
  const [imagePath, setImagePath] = useState(null);
  const [videoPath, setVideoPath] = useState(null);

  const handleImageUpload = (e) => {
    let b;
    const file = e.target.files[0];
    if (file) {
      // You can process the image file here as needed.
      // For now, we'll just store the file path in the state.
     b= setImagePath(URL.createObjectURL(file));
    }
    console.log(b)
  };
  

  const handleVideoUpload = (e) => {
    let a;
    const file = e.target.files[0];
    if (file) {
      // You can process the video file here as needed.
      // For now, we'll just store the file path in the state.
       a = setVideoPath(URL.createObjectURL(file));
    }

  console.log(a);

  };
  console.log(imagePath);

//   void useEffect();{
//     handleImageUpload();
//     handleVideoUpload();
//   }

 


  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-image: url('https://images.pexels.com/photos/20258/pexels-photo.jpg?cs=srgb&dl=pexels-somchai-kongkamsri-20258.jpg&fm=jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            font-family: 'Arial, sans-serif';
          }
        `}
      </style>
      <div style={containerStyle}>
        <h1 style={h1Style}>Welcome to Your Website</h1>
        <p>This is a simple front-end with a background image.</p>
        <div style={centerButtonDiv}>
          {/* Input field for uploading an image */}
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload" style={uploadButtonStyle}>
            Upload Image
          </label>

          {/* Input field for uploading a video */}
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            style={{ display: 'none' }}
            onChange={handleVideoUpload}
          />
          <label htmlFor="video-upload" style={uploadButtonStyle}>
            Upload Video
          </label>
        </div>

        {imagePath && (
          <div>
            <img src={imagePath} alt="Uploaded Image" style={{ maxWidth: '100%' }} />
          </div>
        )}

        {videoPath && (
          <div>
            <video controls width="100%">
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
