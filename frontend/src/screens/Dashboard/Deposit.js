import { Button, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../Redux/action/alertactions";
import { useNavigate } from "react-router-dom";
import { deposit } from "../../Redux/action/userActions";
import useMediaQuery from '@mui/material/useMediaQuery';

const Deposit = ({setrefresh}) => {
    const md = useMediaQuery('(min-width:1100px)');
    const user  = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deposits = useSelector((state)=>state.user.deposits)
    const isLoading = useSelector((state)=>state.user.isLoading)
    const [selectedValue, setSelectedValue] = useState('5% after 2 days');
    const [method, setmethod] = useState('BTC');
    const [amount, setamount] = useState(100.00)
    const [min, setmin] = useState(100.00)
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        switch (event.target.value) {
            case '5% after 2 days':
                setamount(100)
                setmin(100)
                break;
            case '8% after 2 days':
                setamount(10000)
                setmin(10000)
                break;
            case '10% after 3 days':
                setamount(30000)
                setmin(30000)
                break;
            case '15% after 1 week':
                setamount(100000)
                setmin(100000)
                break;
            default:
                break;
        }
    };
    const handleclick = () => {
        const formdata = {
            amount: amount,
            method: method,
            package: selectedValue,
        }
        if (amount < min) {
            dispatch(setAlert(`Minimum allowed mount for selected package is $${min}`, "error"))
        } else {
            if (method === "Acc") {
                if(user.balance>=amount){
                const formData = {
                    amount: amount,
                    package:selectedValue,
                    method: method,
                    profit: selectedValue.split('%')[0],
                    TrxID: 'Account Balance',
                    user: user
                }
                dispatch(deposit(formData,navigate,setrefresh))
                }
                else {
                    dispatch(setAlert('Not enough account balance','error'))
                }
            } else {
                navigate('/dashboard/checkout', { state: { formdata } })
            }
        }
    }
    return (
        <>
            <Stack sx={{ flex: 4, gap: '20px' }}>
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
                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '5% after 2 days'}
                            onChange={handleChange}
                            value="5% after 2 days"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>5% After 2 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1, textAlign: 'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1, textAlign: 'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500', flex: 1 }}>BASIC</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$100-$9,999</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>5.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray' ,cursor:'pointer'}} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>



                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '8% after 2 days'}
                            onChange={handleChange}
                            value="8% after 2 days"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>8% After 2 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem', flex: 1 } }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem', flex: 1, textAlign: 'center' } }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem', flex: 1 }, textAlign: 'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500', flex: 1 }}>STANDARD</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$10,000-$29,000</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>8.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray',cursor:'pointer' }} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>


                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '10% after 3 days'}
                            onChange={handleChange}
                            value="10% after 3 days"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>10% After 3 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1, textAlign: 'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem', flex: 1, textAlign: 'end' } }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500', flex: 1 }}>PREMIUM</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$30,000-$999,999</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>10.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray',cursor:'pointer' }} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>


                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '15% after 1 week'}
                            onChange={handleChange}
                            value="15% after 1 week"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>15% After 1 Week</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1, textAlign: 'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' }, flex: 1, textAlign: 'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500', flex: 1 }}>ULTIMATE</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$100,000-$9,999,999</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>15.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray',cursor:'pointer' }} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack sx={{ backgroundColor: '#182128', padding: '20px', alignItems: 'center', borderRadius: '10px', gap: '10px' }}>
                        <Typography sx={{ fontSize: { md: '20px' } }}>YOUR ACCOUNT BALANCE($)</Typography>
                        <Typography sx={{ fontSize: { md: '22px' }, color: '#edd50e', fontWeight: 'bold' }}>$0.00</Typography>
                        <Typography sx={{ fontSize: { md: '18px' }, color: 'gray' }}>AMOUNT TO SPEND($)</Typography>
                        <input type="number" style={{ width: '70%', color: 'white', fontSize: '28px', padding: '8px', fontWeight: 'bold', textAlign: 'center', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', backgroundColor: '#05bca6' }} value={amount} onChange={(e) => {setamount(parseInt(e.target.value)) }} min={min}/>
                    </Stack>
                </Stack>
                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack sx={{ backgroundColor: '#182128', padding: '20px', borderRadius: '10px', gap: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Payment Processor</Typography>
                        {/* <Stack direction="row" sx={{ alignItems: 'center', gap: '5px' }}>
                            <input type="radio" />
                            <Typography>Bitcoin-BTC </Typography>
                        </Stack> */}
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={method}
                                name="radio-buttons-group"
                                onChange={(e) => { setmethod(e.target.value) }}
                            >
                                <FormControlLabel value="BTC" control={<Radio sx={{ color: 'white' }} />} label="Bitcoin - BTC" onChange={() => { }} />
                                <FormControlLabel value="ETH" control={<Radio sx={{ color: 'white' }} />} label="Ethereum - ETH" />
                                <FormControlLabel value="TRC" control={<Radio sx={{ color: 'white' }} />} label="USDT (Trc20)" />
                                <FormControlLabel value="BNB" control={<Radio sx={{ color: 'white' }} />} label="Binance Coin - BNB" />
                                <FormControlLabel value="Acc" control={<Radio sx={{ color: 'white' }} />} label="Account Balance" />
                            </RadioGroup>
                        </FormControl>
                        <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', margin: 'auto' }} onClick={handleclick} disabled={isLoading}>
                        {!isLoading &&<Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>DEPOSIT</Typography>}
                         {isLoading &&<CircularProgress sx={{color:'white', width: "24px !important", height: '24px !important', padding: "0px 8px"}} />}
                        </Button>

                    </Stack>
                </Stack>
            </Stack>

        </>
    );
}

export default Deposit;