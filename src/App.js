import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = "/";
  //   });
  // };


  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/Dashboard' element={<Dashboard setIsAuth={setIsAuth} isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
