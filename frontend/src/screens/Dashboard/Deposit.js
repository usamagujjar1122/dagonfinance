import { Button, Divider, Stack, Typography } from "@mui/material";
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

const Deposit = () => {
    const md = useMediaQuery('(min-width:1100px)');
    const user  = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deposits = useSelector((state)=>state.user.deposits)
    const [selectedValue, setSelectedValue] = useState('15% after 24 hours');
    const [method, setmethod] = useState('BTC');
    const [amount, setamount] = useState(100.00)
    const [min, setmin] = useState(100.00)
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        switch (event.target.value) {
            case '15% after 24 hours':
                setamount(100.00)
                setmin(100)
                break;
            case '20.2% after 24 hours':
                setamount(400.00)
                setmin(400)
                break;
            case '35% after 2 days':
                setamount(1800.00)
                setmin(1800)
                break;
            case '45% after 1 week':
                setamount(4500.00)
                setmin(4500)
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
                dispatch(deposit(formData,navigate))
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
                            checked={selectedValue === '15% after 24 hours'}
                            onChange={handleChange}
                            value="15% after 24 hours"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>15% After 24 Hours</Typography>
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
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$100-$50000</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>15.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray' ,cursor:'pointer'}} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>



                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '20.2% after 24 hours'}
                            onChange={handleChange}
                            value="20.2% after 24 hours"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>20/2% After 24 Hours</Typography>
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
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$400-$100000</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>20.20</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray',cursor:'pointer' }} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>


                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '35% after 2 days'}
                            onChange={handleChange}
                            value="35% after 2 days"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>35% After 2 Days</Typography>
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
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$1800-$999999</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>35.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', padding: '10px', justifyContent: 'end' }}>
                        <Typography sx={{ color: 'gray',cursor:'pointer' }} onClick={()=>{navigate('/dashboard/calculate')}}>calculate your profit `{'>>'}` </Typography>
                    </Stack>
                </Stack>


                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', alignItems: 'center' }}>
                        <Radio
                            checked={selectedValue === '45% after 1 week'}
                            onChange={handleChange}
                            value="45% after 1 week"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{ color: 'white' }}
                        />

                        <Typography sx={{ fontWeight: 'bold' }}>45% After 1 Week</Typography>
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
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'center' }}>$4500-$999999</Typography>
                        <Typography sx={{ fontWeight: '500', flex: 1, textAlign: 'end' }}>45.00</Typography>
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
                        <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', margin: 'auto' }} onClick={handleclick}>DEPOSIT</Button>

                    </Stack>
                </Stack>
            </Stack>

        </>
    );
}

export default Deposit;