import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageDetetect from './ImageDetector/ImageDetetect'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/imageDetetct"  element={<ImageDetetect/>}/>

      </Routes>
    </Router>
  );
};

export default App;
