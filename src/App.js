import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Mision from './components/Pages/Mission';
import Profile from './components/Pages/Profile';
import Rocket from './components/Pages/Rocket';
import './App.css';
import Mission from './components/Pages/Mission';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket/>} />
        <Route path="/missions" element={<Mission/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>  
  );
}

export default App;
