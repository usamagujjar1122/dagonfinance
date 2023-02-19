import { Button, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edit } from "../../Redux/action/userActions";
const Edit = ({setrefresh}) => {
    const user = useSelector(state=>state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const md = useMediaQuery('(min-width:1100px)');
    const [btcaddress,setbtcaddress] = useState(user.btcaddress)
    const [ethaddress,setethaddress] = useState(user.ethaddress)
    const [usdtaddress,setusdtaddress] = useState(user.usdtaddress)
    const [bnbaddress,setbnbaddress] = useState(user.bnbaddress)
    const handleclick =() =>{
        const formdata = {
            user:user,
            btcaddress:btcaddress,
            ethaddress:ethaddress,
            trcaddress:usdtaddress,
            bnbaddress:bnbaddress,
        }
        dispatch(edit(formdata,navigate,setrefresh))
    }
    return (
        <>
        {
            <Stack sx={{ flex: 4 }}>
                <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" ,gap:'20px'}}>
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px !important', md: '32px !important' },whiteSpace:'nowrap' ,textAlign:'center'}}><span style={{ color: '#35c555' }}>PAYMENT </span>SYSTEM</Typography>
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
                        <Typography sx={{width:'30%' ,color:'white',fontSize:{xs:"12px",md:'14px'}}}>BEP20 - BNB Wallet Address:</Typography>
                        <input type="text" style={{ padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontWeight:'600' }} value={bnbaddress} onChange={(e)=>{setbnbaddress(e.target.value)}}/>
                    </Stack>
                    <Button sx={{marginTop:'10px',background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold',margin:'auto'}} onClick={handleclick}>CHANGE DATA</Button>
                </Stack>
            </Stack>
        }
        </>
    );
}

export default Edit;