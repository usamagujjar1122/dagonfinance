import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import {URL} from './url'
const Forgot = ({ setAlert, setMsg, setType }) => {
    const [email, setEmail] = useState()
    const [otp, setOtp] = useState()
    const [loading, setLoading] = useState(false)
    const [reset, setReset] = useState(false)
    const [sent, setSent] = useState(false)
    const [password, setPassword] = useState()
    const [newpassword, setnewpassword] = useState()
    const [confirmpassword, setconfirmassword] = useState()

    const navigate = useNavigate()
    const handleclick = async () => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/forgot`, {email})
        console.log(res.data)
        if (res.data.status === "success") {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setSent(true)
            setOtp(res.data.otp)
        } else {
            setAlert(true)
            setMsg(res.data.message)
            setType('error')
        }
    }
    const handlesubmit = async () => {
        if(otp==password){
            setAlert(true)
            setMsg("OTP confirmed")
            setType('success')
            setReset(true)

        } else {
            console.log(otp,password)
        }
    }
    const handlefinal = async () => {
        if(newpassword===confirmpassword){
        const res = await axios.post(`${URL}/user/reset`, {email,newpassword})
        console.log(res.data)
        if (res.data.success) {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setSent(true)
            setOtp(res.data.otp)
            navigate('/login')
        } else {
            setAlert(true)
            setMsg(res.data.message)
            setType('error')
        }
    } else {
        setAlert(true)
            setMsg("Passwords not match")
            setType('error')
    }
    }
    return (
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px',display:reset? 'block' : 'none' }}>
            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px' }}>RESET PASSWORD</Typography>
                <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                    <input type="password" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Enter new password' vlaue={newpassword} onChange={(e) => { setnewpassword(e.target.value) }} />
                </Box>
                
                <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' },display:sent? "block" :"none" }}>
                    <input type="password" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Confirm new password' vlaue={confirmpassword} onChange={(e) => { setconfirmassword(e.target.value) }} />
                </Box>
               
                <Box sx={{ backgroundColor: '#009603', padding: '16px 32px', width: 'fit-content', cursor: 'pointer' }} onClick={handlefinal}>
                     <Typography sx={{ color: 'white', fontWeight: 'bold' }}>SUBMIT</Typography>
                </Box>
            </Stack>
        </Box>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px',display:reset? 'none' : 'block' }}>
                <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '32px' }}>REGISTER</Typography>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="email" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Enter your Email' vlaue={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </Box>
                    
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' },display:sent? "block" :"none" }}>
                        <input type="number" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='OTP' vlaue={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Box>
                    {sent ? 
                    <Box sx={{ backgroundColor: '#009603', padding: '16px 32px', width: 'fit-content', cursor: 'pointer' }} onClick={handlesubmit}>
                         <Typography sx={{ color: 'white', fontWeight: 'bold' }}>SUBMIT</Typography>
                    </Box>
                    :
                    <Box sx={{ backgroundColor: '#009603', padding: '16px 32px', width: 'fit-content', cursor: 'pointer' }} onClick={handleclick}>
                         {loading ? <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }}/> : <Typography sx={{ color: 'white', fontWeight: 'bold' }}>SEND OTP</Typography>}
                    </Box>
                    }
                </Stack>
            </Box>
                
                </>
    );
}

export default Forgot;