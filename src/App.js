import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavigationBar from './Components/NavBar/NavigationBar'
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Interests" element={<>yay</>} />
          <Route path="*" element={<>yay</>} />
      </Routes>
    </>
    
  );
}

export default App;
