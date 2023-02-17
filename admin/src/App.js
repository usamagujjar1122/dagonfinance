import AdminLogin from './Admin/AdminLogin';
import Dashboard from './Admin/Dashboard'
import {useEffect,useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Messages from './Admin/Messages';
function App() {
  const [token,setToken] = useState(localStorage.getItem('dgfinance'))
  useEffect(()=>{
    setToken(localStorage.getItem('dgfinance'))
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={ <Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
