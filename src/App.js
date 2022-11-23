import { Route, Routes } from 'react-router';
import NavBar from './components/navBar/navBar';
import './App.css';
import Rockets from './page/Rockets/Rockets';
import Mission from './page/Mission/Mission';

function App() {
  return (
    <div className="AppWrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Mission />} />
        <Route path="/myprofile" />
      </Routes>
    </div>
  );
}

export default App;
