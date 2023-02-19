import { Button, CircularProgress, Divider, Radio, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withdraw } from "../../Redux/action/userActions";
import axios from 'axios'
import {URL} from '../../url'
const Withdrawl = ({setrefresh}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const md = useMediaQuery('(min-width:800px)');
    const [selectedValue, setSelectedValue] = useState();
    const user = useSelector((state)=>state.user.user)
    const isLoading = useSelector((state)=>state.user.isLoading)
    const deposits = useSelector((state)=>state.user.deposits)
    const [amount,setamount] = useState()
    const [history,sethistory] = useState()
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handlewithdraw = () => {
        const formdata = {
            user:user,
            method:selectedValue,
            amount:amount,
        }
        dispatch(withdraw(formdata,navigate,setrefresh))
    }
    const loadhistory = async () =>{
        const res = await axios.post(`${URL}/user/loadwithdraw`, {user:user})
        console.log(res.data)
        sethistory(res.data.data.reverse())
    }
    useEffect(()=>{
        loadhistory()
    },[])
    return ( 
        
        <>{ user &&
         <Stack sx={{ flex: 4,gap:'20px' }}>
                <Stack direction={md?'row':'column'} sx={{ backgroundColor: '#05bca6', padding: '10px 20px', justifyContent: 'space-between', borderRadius: '25px', gap: "30px" }}>
                    <Stack direction="row" sx={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>ACCOUNT BALANCE</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>${user.balance}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>PENDING WITHDRAWL</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>${deposits.pendingw}</Typography>
                    </Stack>
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px'}}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1 } }}>PROCESSING</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:md? 3: 1} }}>ACCOUNT</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px 0px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } },alignItems:'center' }}>
                       <Stack direction="row" sx={{alignItems:'center',flex:1}}>
                        <Radio
                            checked={selectedValue === `BTC${user.btcaddress}`}
                            onChange={handleChange}
                            value={`BTC${user.btcaddress}`}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white',display:user.btcaddress? 'flex' : 'none' }}
                        />
                        <Typography sx={{ fontWeight: '500',fontSize: { xs: '0.8rem', md: '1rem' } }}> Bitcoin - BTC</Typography>
                        </Stack>
                        { user.btcaddress ?
                        <Typography sx={{ fontWeight: '500',flex:md? 3: 1 }}>{md? user.btcaddress :`${user.btcaddress.slice(0,5)}......${user.btcaddress.slice(user.btcaddress.length-5,user.btcaddress.length)}`}</Typography>
                        :
                        <Stack sx={{flex:md? 3: 1}}>
                        <Link to="/dashboard/edit" style={{textDecoration:'none'}}><Button sx={{color:'white',backgroundColor:'#5bc0de',flex:3,maxWidth:'fit-content',alignSelf:'start'}}>Edit</Button></Link>
                        </Stack>
                        }
                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px 0px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } },alignItems:'center' }}>
                       <Stack direction="row" sx={{alignItems:'center',flex:1}}>
                        <Radio
                            checked={selectedValue === `ETH${user.ethaddress}`}
                            onChange={handleChange}
                            value={`ETH${user.ethaddress}`}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white',display:user.ethaddress? 'flex' : 'none' }}
                        />
                        <Typography sx={{ fontWeight: '500',fontSize: { xs: '0.8rem', md: '1rem' } }}>Etherium-ETH</Typography>
                        </Stack>
                        { user.ethaddress ?
                        <Typography sx={{ fontWeight: '500',flex:md? 3: 1 }}>{md? user.ethaddress :`${user.ethaddress.slice(0,5)}......${user.ethaddress.slice(user.ethaddress.length-5,user.ethaddress.length)}`}</Typography>
                        :
                        <Stack sx={{flex:md? 3: 1}}>
                        <Link to="/dashboard/edit" style={{textDecoration:'none'}}><Button sx={{color:'white',backgroundColor:'#5bc0de',flex:3,maxWidth:'fit-content',alignSelf:'start'}}>Edit</Button></Link>
                        </Stack>
                        }
                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px 0px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } },alignItems:'center' }}>
                       <Stack direction="row" sx={{alignItems:'center',flex:1}}>
                        <Radio
                            checked={selectedValue === `TRC${user.trcaddress}`}
                            onChange={handleChange}
                            value={`TRC${user.trcaddress}`}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white',display:user.trcaddress? 'flex' : 'none' }}
                        />
                        <Typography sx={{ fontWeight: '500' ,fontSize: { xs: '0.8rem', md: '1rem' }}}> Tron - USDT</Typography>
                        </Stack>
                        { user.trcaddress ?
                        <Typography sx={{ fontWeight: '500',flex:md? 3: 1 }}>{md? user.trcaddress :`${user.trcaddress.slice(0,5)}......${user.trcaddress.slice(user.trcaddress.length-5,user.trcaddress.length)}`}</Typography>
                        :
                        <Stack sx={{flex:md? 3: 1}}>
                        <Link to="/dashboard/edit" style={{textDecoration:'none'}}><Button sx={{color:'white',backgroundColor:'#5bc0de',flex:3,maxWidth:'fit-content',alignSelf:'start'}}>Edit</Button></Link>
                        </Stack>
                        }
                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px 0px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } },alignItems:'center' }}>
                       <Stack direction="row" sx={{alignItems:'center',flex:1}}>
                        <Radio
                            checked={selectedValue === `BNB${user.bnbaddress}`}
                            onChange={handleChange}
                            value={`BNB${user.bnbaddress}`}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white',display:user.bnbaddress? 'flex' : 'none' }}
                        />
                        <Typography sx={{ fontWeight: '500' ,fontSize: { xs: '0.8rem', md: '1rem' }}}> Binance - BNB</Typography>
                        </Stack>
                        { user.bnbaddress ?
                        <Typography sx={{ fontWeight: '500',flex:md? 3: 1 }}>{md? user.bnbaddress :`${user.bnbaddress.slice(0,5)}......${user.bnbaddress.slice(user.bnbaddress.length-5,user.bnbaddress.length)}`}</Typography>
                        :
                        <Stack sx={{flex:md? 3: 1}}>
                        <Link to="/dashboard/edit" style={{textDecoration:'none'}}><Button sx={{color:'white',backgroundColor:'#5bc0de',flex:3,maxWidth:'fit-content',alignSelf:'start'}}>Edit</Button></Link>
                        </Stack>
                        }
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack sx={{alignItems:'center',padding:"20px 0px",gap:'10px'}}>
                    <Typography sx={{ fontSize: { md: '18px' }, color: 'white',fontWeight:'600' }}>ENTER AMOUNT</Typography>
                    <input type="number" style={{  color: 'white', fontSize: '28px', padding: '8px', fontWeight: 'bold', textAlign: 'center', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', backgroundColor: '#05bca6' }} value={amount} onChange={(e)=>{setamount(e.target.value)}} />
                    <Button sx={{marginTop:'10px',background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold'}} onClick={handlewithdraw} disabled={isLoading}>
                    {!isLoading &&<Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>WITHDRAW</Typography>}
                    {isLoading &&<CircularProgress sx={{color:'white', width: "24px !important", height: '24px !important', padding: "0px 8px"}} />}
                    </Button>
                    </Stack>
                </Stack>
                { history &&
                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1 }}>METHOD</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'center' }}>AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1 ,textAlign:'end'}}>STATUS</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    { history.map((item)=>(
                        <>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }} key={item._id}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>{item.method.slice(0,3)}</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>${item.amount}</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'end' }}>{item.status}</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    </>
                    ))
                    }
                    <Typography sx={{color:'gray',textAlign:'center',padding:'10px'}}>No more data</Typography>

                </Stack>
                }
        </Stack>
        }
        </>
        
     );
}
 
export default Withdrawl;