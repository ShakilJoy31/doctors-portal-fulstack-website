import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shered/navbar/Navbar';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
