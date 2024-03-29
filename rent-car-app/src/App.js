import './App.css';
import Login from './Login/login';
import Register from './Register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Promo from './Promo/promo';
import Form from './Form/form';
import Payment from './Payment/Payment';
import Order from './Order/Order'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Promo/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={<Form />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;