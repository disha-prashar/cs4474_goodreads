
import NavBar from './Components/navbar/NavBar';
import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';
import MyBooks from './Pages/MyBooks/MyBooks'
import ReadingView from './Pages/MyBooks/ReadingView';
import WantToReadView from './Pages/MyBooks/WantToReadView'
import ReadView from './Pages/MyBooks/ReadView';
import SignUpLogin from './Pages/Home/SignUpLogin/SignUpLogin'
import {Route, Routes, Navigate} from "react-router-dom";
import ArtBooks from './Pages/Home/BestBooksViews/ArtBooks';
import FantasyBooks from './Pages/Home/BestBooksViews/FantasyBooks';
import HorrorBooks from './Pages/Home/BestBooksViews/HorrorBooks';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Navigate to home page after login
    return <Navigate to="/Home" />;
  };

  return (
      <>
      <NavBar username={username} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/MyBooks" element={<MyBooks />} />
          <Route path="/ReadingView" element = {<ReadingView />} />
          <Route path="/WantToReadView" element = {<WantToReadView />} />
          <Route path="/ReadView" element = {<ReadView />} />
          <Route path="/SignUpLogin" element={<SignUpLogin setUsername={setUsername} onLogin={handleLogin} />} />
          <Route path="/ArtBooks" element = {<ArtBooks />} />
          <Route path="/FantasyBooks" element = {<FantasyBooks />} />
          <Route path="/HorrorBooks" element = {<HorrorBooks />} />
        </Routes>
      </>
  );
}

export default App;
