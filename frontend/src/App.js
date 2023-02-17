import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navigate} from 'react-router'
import Footer from './comp/Footer';
import Navbar from './comp/Navbar';
import AboutUs from './screens/AboutUs';
import Affiliate from './screens/Affiliate';
import Contact from './screens/Contact';
import Dashboard from './screens/Dashboard/Dashboard';
import Forgot from './screens/Dashboard/Forgot';
import Login from './screens/Dashboard/Login';
import Register from './screens/Dashboard/Register';
import Faq from './screens/Faq';
import Home from './screens/Home';
import HowTo from './screens/HowToInvest';
import News from './screens/News';
import Rules from './screens/Rules';
import Alert from './comp/alerts'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  loadUser } from './Redux/action/userActions';
function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.user.isAuthorized)
  useEffect(()=>{
    dispatch(loadUser(localStorage.getItem('dftoken')))
  },[])
  return (
    <>
    
   <BrowserRouter>
   <Navbar />
   <Alert open={true} />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/howto" element={<HowTo />} />
    <Route path="/affiliate" element={<Affiliate />} />
    <Route path="/rules" element={<Rules />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={ <Contact />} />
    <Route path="/register" element={auth ? <Navigate to ="/"/>  : <Register />} />
    <Route path="/login" element={auth ? <Navigate to ="/"/>  : <Login />} />
    <Route path="/forgot" element={<Forgot />} />
    <Route path="*" element={<Navigate to= "/" />} />
    <Route path="/dashboard/*" element={!auth ? <Navigate to ="/"/>  : <Dashboard />} />
    </Routes>
   <Footer />
   </BrowserRouter>

   </>
  );
}

export default App;
