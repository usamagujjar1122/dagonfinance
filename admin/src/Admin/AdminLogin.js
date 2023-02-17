import { Box, Typography } from "@mui/material";
import { useState } from "react";

const AdminLogin = ({ setAlert, setMsg, setType }) => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const handleclick = async () => {
        if(email==="admin@admin.com" && password==="admin"){
            localStorage.setItem('dgfinance','sDjkfsdkjcvksdjfbweiur2388923.asdjkfui23yr2983fhjk.jhwefg2378trfugasejh')
            setAlert(true)
            setMsg('Login Success')
            setType('success')
            window.location.reload()
        } else {
            setMsg('invalid credentials')
            setType('error')
            setAlert(true)
        }
    }
    return (
        <>
            <Box sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'20px',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:{xs:'90%',md:'65%'} }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>ADMIN LOGIN</Typography>
                <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                    <input type="email" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Email' vlaue={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Box>
                <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                    <input type="password" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Password' vlaue={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Box>

                <Box sx={{ backgroundColor: '#009603', padding: '16px 32px', width: 'fit-content', cursor: 'pointer' }} onClick={handleclick}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Typography>
                </Box>
            </Box>
        </>
    );
}

export default AdminLogin;