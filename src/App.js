import { Route, Routes } from 'react-router';
import NavBar from './components/navBar/navBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
      </Routes>
    </div>
  );
}

export default App;
