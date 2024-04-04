
import NavBar from './Components/navbar/NavBar';
import React from 'react';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';
import MyBooks from './Pages/MyBooks/MyBooks'
import ReadingView from './Pages/MyBooks/ReadingView';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/MyBooks" element={<MyBooks />} />
          <Route path="/ReadingView" element = {<ReadingView />} />
        </Routes>
      </>
  );
}

export default App;
