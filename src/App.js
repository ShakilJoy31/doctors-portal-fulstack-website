import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shered/navbar/Navbar';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import RequireAuth from './Pages/Shered/RequireAuth';import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Pages/Shered/Loading';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import AllUser from './Pages/DashBoard/AllUser';
import AddDoctors from './Pages/DashBoard/AddDoctors';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='alluser' element={<AllUser></AllUser>}></Route>
          <Route path='addDoctor' element={<AddDoctors></AddDoctors>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
