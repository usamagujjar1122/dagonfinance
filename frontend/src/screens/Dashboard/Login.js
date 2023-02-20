import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/action/userActions";
const Login = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state=>state.user.isLoading)
    const md = useMediaQuery('(min-width:800px)');
    const [username,setusername] = useState()
    const [password,setpassword] = useState()
    const navigate = useNavigate()
    const handleclick = () => {
        const formdata = {
            username:username,
            password:password
        }
        dispatch(login(formdata,navigate))
    }
    return (
        <>
        
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>USER <span style={{ fontWeight: 'bold' }}> LOGIN</span></Typography>
            </Stack>
            <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '20px', alignItems: 'center',width:{xs:'90%',md:'60%'},margin:'auto' }}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' },whiteSpace:'nowrap' }}><span style={{ color: '#35c555' }}>ENTER LOGIN </span>DETAILS</Typography>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'16px'}}}>Username:</Typography>
                        <input type="text" style={{width:'70%', padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={username} onChange={(e)=>{setusername(e.target.value)}} />
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'16px'}}}>Password:</Typography>
                        <input type="password" style={{width:'70%', padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    </Stack>
                    <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between',width:{xs:'100%',md:'90%'}}}>
                    <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold'}} onClick={handleclick} disabled={isLoading}>
                    {!isLoading &&<Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>LOGIN</Typography>}
                    {isLoading &&<CircularProgress sx={{color:'white', width: "24px !important", height: '24px !important', padding: "0px 8px"}} />}
                    </Button>
                    <Link to="/forgot" style={{textDecoration:'none'}}><Typography sx={{color:'#03bca6','&:hover':{color:'white'},cursor:'pointer'}}>Retrive password?</Typography></Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ background: 'linear-gradient(90deg, rgba(0,187,170,1) 0%, rgba(53,197,85,1) 100%)', padding: { xs: "20px 10px", md: "30px" }, alignItems: 'center' }}>
            <Typography sx={{color:'white',fontWeight:'bold',fontSize:{xs:'16px',md:'30px',textAlign:'center'}}}>IF YOU ARE NEW TO DAGON FINANCE</Typography>
            <Link to="/register" style={{textDecoration:'none'}}><Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold'}}>
                SIGNUP
             </Button></Link>
            
            </Stack>
            </>
            
        
    );
}

export default Login;