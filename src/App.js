import { Route, Routes } from 'react-router';
import NavBar from './components/navBar/navBar';
import './App.css';
import Mission from './page/Mission/Mission';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route exact path="/missions" element={<Mission />} />
        <Route path="/myprofile" />
      </Routes>
    </div>
  );
}

export default App;
