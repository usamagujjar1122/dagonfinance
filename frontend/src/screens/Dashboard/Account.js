import { Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {  useSelector } from "react-redux";
import {  useEffect, useState } from "react";
import axios from "axios";
import {WEB_URL} from '../../url'
const Account = () => {
    const deposits = useSelector((state)=>state.user.deposits)
    const md = useMediaQuery('(min-width:1100px)');
    const user = useSelector((state)=>state.user.user)
    const [ip,setIP] = useState()
    
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    useEffect(()=>{
        getData()
    },[])
    return ( 
        <>
        { user && 
        <Stack sx={{flex:4,gap:'20px'}}>
                    <Stack direction={md?'row':'column'} sx={{backgroundColor:'#35c555',padding:'10px',justifyContent:'space-between',borderRadius:'10px',gap:{xs:'20px',md:'0px'}}}>
                        <Stack direction="row" sx={{alignItems:'center',gap:'10px'}}>
                            <img src="img/accountbox2.png" alt="" style={{width:'50px'}}/>
                            <Stack sx={{color:'white'}}>
                                <Typography>REGISTRATION DATE</Typography>
                                <Typography sx={{fontWeight:'bold'}}>{user.createdat.slice(0,10)}</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'10px'}}>
                            <img src="img/accountbox3.png" alt="" style={{width:'50px'}}/>
                            <Stack sx={{color:'white'}}>
                                <Typography>LAST ACCESS</Typography>
                                <Typography sx={{fontWeight:'bold'}}>{user.lastaccess.replaceAll('/','-')}</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'10px'}}>
                            <img src="img/accountbox4.png" alt="" style={{width:'50px'}}/>
                            <Stack sx={{color:'white'}}>
                                <Typography>YOUR IP</Typography>
                                { ip && <Typography sx={{fontWeight:'bold'}}>{ip}</Typography>}
                                { !ip && <Typography sx={{fontWeight:'bold'}}>000.000.00.00</Typography>}

                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="row" sx={{backgroundColor:'#2e394275',padding:'10px',justifyContent:'space-between',borderRadius:'10px'}}>
                        <Stack direction={md?'row':'column'} sx={{backgroundColor:'#edd50e',borderRadius:'10px',width:'100%',padding:'20px',alignItems:'center'}}>
                            <Typography sx={{fontWeight:'600',flex:1}}>REFERAL LINK:</Typography>
                             <input type="text" style={{flex:4, padding:'10px', border: 'none', outline: 'none', width: '95%',borderRadius:'5px',fontSize:{xs:'14px',md:'18px'},fontWeight:'bold' }} readonly value={`${WEB_URL}/register?ref=${user.username}`} />

                        </Stack>
                    </Stack>
                    <Stack direction={md?'row':'column'} sx={{backgroundColor:'#05bca6',padding:'10px 20px',justifyContent:'space-between',borderRadius:'25px',gap:"30px"}}>
                        <Stack direction="row" sx={{flex:1 ,color:'white',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography>ACCOUNT BALANCE</Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>${user.balance}</Typography>
                        </Stack>
                        <Stack direction="row" sx={{flex:1 ,color:'white',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography>EARNED BALANCE</Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>${deposits ? deposits.earned: 0} </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{backgroundColor:'#2e394275',padding:'10px',justifyContent:'space-between',borderRadius:'10px'}}>
                        <Stack sx={{width:'100%'}}>
                            <Stack direction={"row"} sx={{backgroundColor:'#edd50e',alignItems:'center',justifyContent:'space-between',padding:'10px',borderRadius:'10px'}}>
                                <Typography sx={{fontWeight:'600'}}>DEPOSITE STATEMENT</Typography>
                                <img src="img/depstatement.png" alt="" />
                            </Stack>
                            {deposits && 
                                <>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>ACTIVE DEPOSIT</Typography>
                                <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.actived}</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>LAST DEPOSIT</Typography>
                                 <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.lastd}</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>TOTAL DEPOSIT</Typography>
                                 <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.totald}</Typography>
                            </Stack>
                            </>
                            }
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{backgroundColor:'#2e394275',padding:'10px',justifyContent:'space-between',borderRadius:'10px'}}>
                        <Stack sx={{width:'100%'}}>
                            <Stack direction={"row"} sx={{backgroundColor:'#edd50e',alignItems:'center',justifyContent:'space-between',padding:'10px',borderRadius:'10px'}}>
                                <Typography sx={{fontWeight:'600'}}>WITHDRAWL STATEMENT</Typography>
                                <img src="img/depstatement.png" alt="" />
                            </Stack>
                            {deposits && 
                                <>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>PENDING WITHDRAW</Typography>
                                <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.pendingw}</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>LAST WITHDRAW</Typography>
                                 <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.lastw}</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{alignItems:'center',justifyContent:'space-between',padding:'10px',color:'#ADADAD'}}>
                                <Typography sx={{fontWeight:'500'}}>TOTAL WITHDRAW</Typography>
                                 <Typography sx={{color:'#edd50e',fontWeight:'bold'}}>${deposits.totalw}</Typography>
                            </Stack>
                            </>
                            }
                        </Stack>
                        </Stack>
                </Stack>    
                }
        </>
     );
}
 
export default Account;