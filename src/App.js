import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {


  return (

    <div>
      <Router>
        <Routes>
          <Route path='Login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
