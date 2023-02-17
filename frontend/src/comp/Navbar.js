import { Button, Drawer, IconButton, Paper, Stack, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import {logout} from '../Redux/action/userActions'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch()
    const md = useMediaQuery('(min-width:1100px)');
    const [open,setOpen] = useState(false)
    const toggleDrawer = (val) => {
        setOpen(val)
    } 
  const user = useSelector((state) => state.user.user);
  const logoutt = () => {
    dispatch(logout())
  }

    return (
        <>
            <Stack>
                <Stack direction="row" sx={{ padding: {xs:'20px 10px',md:"20px 50px"}, backgroundColor: '#0d2736', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" sx={{ gap: "20px" }}>
                        <Typography sx={{ color: 'white', fontWeight: '900', fontSize:{xs:'16px',md:"32px"},whiteSpace:'nowrap'}}>DAGON FINANCE</Typography>
                    </Stack>
                    <Stack sx={{ alignItems: 'end' }}>
                        <Stack direction="row" sx={{ alignItems: "center", gap: {xs:'2px',md:'10px'} }}><SupportAgentIcon sx={{ color: '#e1c903', fontSize:{xs:'22px', md:"38px"} }} /><Typography sx={{ color: 'white', fontSize:{xs:'12px',md:"18px"}, fontWeight: '600',whiteSpace:'nowrap' }}>HAVE A QUESTION?</Typography></Stack>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
                            <Typography sx={{ color: '#35c555', fontWeight: '600',fontSize:{xs:'10px',md:'14px'}}}>LIVE CHAT</Typography>
                            <Stack direction="row" sx={{ alignItems: "center", backgroundColor: "white", borderRadius: '25px', gap: "5px", padding: '5px 10px' }}><CircleIcon sx={{ color: '#35c555', fontSize:{ xs:'10px',md:'14px'} }} /><Typography sx={{ color: '#35c555', fontSize:{xs:'10px',md:'14px'} }}>ONLINE</Typography></Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: 'space-between', backgroundColor: '#375160', alignItems: 'center', padding: {xs:'20px 10px',md:"20px 50px"} }}>
                    <IconButton sx={{ display: md ? 'none' : 'flex' }} onClick={()=>toggleDrawer(true)}><MenuIcon sx={{ color: "white" }} /></IconButton>
                    <Drawer
                        anchor={'left'}
                        open={open}
                        onClose={()=>toggleDrawer(false)}
                    >
                        <Paper sx={{minWidth:'50vw',backgroundColor:'#375160',minHeight:'100%'}} onClick={()=>setOpen(false)}>
                        <Stack sx={{gap:"20px",padding:'20px'}}>
                        <Link to="/" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>HOME</Typography></Link>
                        <Link to="/about" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>about us</Typography></Link>
                        <Link to="/howto" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>how to invest</Typography></Link>
                        <Link to="/affiliate" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>affiliate</Typography></Link>
                        <Link to="/rules" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>rules</Typography></Link>
                        <Link to="/faq" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>f.a.q</Typography></Link>
                        <Link to="/news" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>news</Typography></Link>
                        <Link to="/contact" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>support</Typography></Link>
                        </Stack>
                        </Paper>
                    </Drawer>
                    <Stack direction='row' sx={{ gap: '20px', alignItems: 'center', display: md ? 'flex' : 'none' }}>
                    <Link to="/" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>HOME</Typography></Link>
                    <Link to="/about" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>about us</Typography></Link>
                    <Link to="/howto" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>how to invest</Typography></Link>
                        <Link to="/affiliate" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>affiliate</Typography></Link>
                        <Link to="/rules" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>rules</Typography></Link>
                        <Link to="/faq" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>f.a.q</Typography></Link>
                        <Link to="/news" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>news</Typography></Link>
                        <Link to="/contact" style={{textDecoration:'none'}}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>support</Typography></Link>
                    </Stack>
                    <Stack direction={"row"}>
                        { user ? 
                        <>
                        <Link to="/dashboard" style={{textDecoration:'none'}}><Button sx={{ backgroundImage: 'url(img/loginbg.png)', backgroundSize: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'translateX(-20px)' } }}>
                            <Stack direction="row" sx={{ alignItems: 'center', padding: "0px 10px" }}>
                                <PersonIcon sx={{ color: 'white' ,fontSize:{xs:'16px',md:'24px'}}} />
                                <Typography sx={{ color: 'white', fontWeight: '600', fontSize:{xs:'10px',md:'14px'}, whiteSpace: 'nowrap' }}>DASHBOARD</Typography>
                            </Stack>
                        </Button></Link>
                        <Button sx={{ backgroundImage: 'url(img/signupbg.png)', backgroundSize: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'translateX(-20px)' } }} onClick={logoutt}>
                            <Stack direction="row" sx={{ alignItems: 'center', padding: "0px 10px" }}>
                                <PersonIcon sx={{ color: 'white' ,fontSize:{xs:'16px',md:'24px'}}} />
                                <Typography sx={{ color: 'white', fontWeight: '600', fontSize:{xs:'10px',md:'14px'}, whiteSpace: 'nowrap' }}>LOGOUT</Typography>
                            </Stack>
                        </Button>
                        </>
                        : <>
                    <Link to="/login" style={{textDecoration:'none'}}><Button sx={{ backgroundImage: 'url(img/loginbg.png)', backgroundSize: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'translateX(-20px)' } }}>
                            <Stack direction="row" sx={{ alignItems: 'center', padding: "0px 10px" }}>
                                <PersonIcon sx={{ color: 'white' ,fontSize:{xs:'16px',md:'24px'}}} />
                                <Typography sx={{ color: 'white', fontWeight: '600', fontSize:{xs:'10px',md:'14px'}, whiteSpace: 'nowrap' }}>MEMBER LOGIN</Typography>
                            </Stack>
                        </Button></Link>
                        <Link to="/register" style={{textDecoration:'none'}}><Button sx={{ backgroundImage: 'url(img/signupbg.png)', backgroundSize: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'translateX(-20px)' } }}>
                            <Stack direction="row" sx={{ alignItems: 'center', padding: "0px 10px" }}>
                                <PersonIcon sx={{ color: 'white' ,fontSize:{xs:'16px',md:'24px'}}} />
                                <Typography sx={{ color: 'white', fontWeight: '600', fontSize:{xs:'10px',md:'14px'}, whiteSpace: 'nowrap' }}>OPEN ACCOUNT</Typography>
                            </Stack>
                        </Button></Link>
                        </>
                        }
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Navbar;