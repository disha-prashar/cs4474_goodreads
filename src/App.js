
import NavBar from './Components/navbar/NavBar';
import React from 'react';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';
import MyBooks from './Pages/MyBooks/MyBooks'
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
        <NavBar/>
        <Home/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/MyBooks" element={<MyBooks />} />
        </Routes>
      </>
  );
}

export default App;
