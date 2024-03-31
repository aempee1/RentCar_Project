import './App.css';
import Login from './Login/login';
import Register from './Register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form/form';
import Home from './Home/home';
import About from './About/about';
import Rules from './Rules/rules';
import Order from './Order/Order'
import Payment from './Payment/payment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={<Form />} />
        <Route path='/about' element={<About />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;