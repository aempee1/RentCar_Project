import './App.css';
import Navbar from './Navbar/navbar';
import Login from './Login/login';
import Register from './Register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Promo from './Promo/promo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Promo/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
