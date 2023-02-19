import { Button, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {  useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/action/userActions";
const Register = () => {
    const md = useMediaQuery('(min-width:800px)');
    const [name,setname] = useState()
    const [username,setusername] = useState()
    const [email,setemail] = useState()
    const [reemail,setreemail] = useState()
    const [password,setpassword] = useState()
    const [repass,setrepass] = useState()
    const [secq,setsecq] = useState()
    const [seca,setseca] = useState()
    const [btcaddress,setbtcaddress] = useState()
    const [ethaddress,setethaddress] = useState()
    const [usdtaddress,setusdtaddress] = useState()
    const [bnbaddress,setbnbaddress] = useState()
    const [checked,setchecked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const referedby = searchParams.get('ref')
    const handleclick = async () => {
        const formdata = {
            name:name,
            username:username,
            email:email,
            reemail:reemail,
            password:password,
            repass:repass,
            secq:secq,
            seca:seca,
            btcaddress:btcaddress,
            ethaddress:ethaddress,
            usdtaddress:usdtaddress,
            bnbaddress:bnbaddress,
            checked:checked,
            referedby:referedby
        }
        dispatch(signup(formdata,navigate))
    }
    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>NEW <span style={{ fontWeight: 'bold' }}> USER</span></Typography>
            </Stack>
            <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '20px', alignItems: 'center',width:{xs:'90%',md:'60%'},margin:'auto' }}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' },whiteSpace:'nowrap' }}><span style={{ color: '#35c555' }}>ACCOUNT </span>INFORMATION</Typography>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Your Full Name:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>User Name:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Define Password:</Typography>
                        <input type="password" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600'}} value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Retype Password:</Typography>
                        <input type="password" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600'}} value={repass} onChange={(e)=>{setrepass(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Your Email:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Retype Email:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={reemail} onChange={(e)=>{setreemail(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Secret Question:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600'}} value={secq} onChange={(e)=>{setsecq(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Secret Answer:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600'}} value={seca} onChange={(e)=>{setseca(e.target.value)}}/>
                    </Stack>

                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' },whiteSpace:'nowrap' }}><span style={{ color: '#35c555' }}>PAYMENT </span>SYSTEM</Typography>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Bitcoin - BTC Wallet Address:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={btcaddress} onChange={(e)=>{setbtcaddress(e.target.value)}} />
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Ethereum - ETH Wallet Address:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={ethaddress} onChange={(e)=>{setethaddress(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>Tron (TRC20) - USDT Wallet Address:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={usdtaddress} onChange={(e)=>{setusdtaddress(e.target.value)}}/>
                    </Stack>
                    <Stack direction={md?"row":'column'} sx={{ flex: 1,width:{xs:'100%',md:'90%'},gap:{xs:'10px',md:'20px'},alignItems:{xs:'start',md:'center'} }}>
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>BEP20 - BNB Wallet Address</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={bnbaddress} onChange={(e)=>{setbnbaddress(e.target.value)}}/>
                    </Stack>
                    <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                        <input type="checkbox" checked={checked} onChange={()=>{setchecked(prev=>!prev)}}/>
                        <Typography sx={{color:'white'}}>I agree to <Link to="/rules" style={{textDecoration:'none'}}><span style={{color:'#03bca6','&:hover':{color:'white'},cursor:'pointer'}}> terms and conditions</span></Link></Typography>
                    </Stack>
                    <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold'}} onClick={handleclick}>REGISTER</Button>
                </Stack>
               
            </Stack>
        </>
    );
}

export default Register;