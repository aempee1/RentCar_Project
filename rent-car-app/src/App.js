import './App.css';
import Login from './Login/login';
import Register from './Register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Promo from './Promo/promo';
import Form from './Form/form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Promo/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;