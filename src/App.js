
import NavBar from './Components/navbar/NavBar';
import React from 'react';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
        </Routes>
      </>
  );
}

export default App;
