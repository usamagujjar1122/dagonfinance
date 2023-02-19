import { Button, CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { deposit, request } from "../../Redux/action/userActions";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const Checkout = ({ setrefresh }) => {
    const user = useSelector((state) => state.user.user)
    const isLoading = useSelector((state) => state.user.isLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const md = useMediaQuery('(min-width:800px)');
    const [TrxID, setTrxID] = useState()
    const state = useLocation();
    const data = state.state.formdata

    const handleclick = () => {
        const formData = {
            amount: data.amount,
            package: data.package,
            method: data.method,
            profit: data.package.split('%')[0],
            TrxID: TrxID,
            user: user
        }
        dispatch(request(formData, navigate, setrefresh))
    }
    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
    }
    const setaddress = () => {
        switch (data.method) {
            case 'TRC':
                return 'TSrgm1yAanQnVsYE2kw16uuKR9ey3Xw92J'
                break;
                case 'ETH':
                    return '0xf42a534bbea10053e7ac9fd405e46a296589897a'
                    break;
                case 'BTC':
                    return '1BVWww3DTvzVb4ZrU8tJ3exkcLcmvbaHVN'
                    break;
                case 'BNB':
                    return 'NOT AVAILABLE*'
                    break;
            default:
                break;
        }
    }
    return (
        <>
            {data && <>
                <Stack sx={{ flex: 4, gap: '20px' }}>
                    <Stack sx={{ color: 'white', }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '22px', md: '32px' }, marginBottom: '30px' }}>Please confirm your deposit:</Typography>
                        <Stack sx={{ '& p': { color: 'white', fontWeight: 'bold',  color: 'gray' },marginBottom:'20px' }}>
                            <Typography >Please send your payment to this wallet: </Typography>
                            <Typography sx={{ overflowWrap: 'anywhere' }}> {setaddress()} <IconButton sx={{padding:"0px"}} onClick={()=>copy(setaddress())}><ContentCopyIcon sx={{color:'gray',fontSize:'14px'}}/> </IconButton> </Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>PLAN</Typography>
                            <Typography>{data.package}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Profit</Typography>
                            <Typography>{data.package}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Principle Return</Typography>
                            <Typography>Yes</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Principle Withdraw</Typography>
                            <Typography>No</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Credit Amount</Typography>
                            <Typography>${data.amount}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Deposit Fee</Typography>
                            <Typography>0.00%</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ color: 'gray', justifyContent: 'space-between', alignItems: 'center', width: { xs: '90%', md: '70%' } }}>
                            <Typography sx={{ fontWeight: '600' }}>Debit Amount</Typography>
                            <Typography>${data.amount}</Typography>
                        </Stack>

                        <Stack sx={{ marginTop: '20px', color: 'gray' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Required Information:</Typography>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "14px", md: '14px' } }}>Transaction ID:</Typography>
                                <input type="text" style={{ padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={TrxID} onChange={(e) => setTrxID(e.target.value)} />
                            </Stack>
                        </Stack>
                        <Stack direction="row" sx={{ gap: '20px', marginTop: '20px' }}>
                            <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={handleclick} disable={isLoading.toString()}>
                                {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>SAVE</Typography>}
                                {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                            </Button>
                            <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={() => navigate('/dashboard')}>CANCLE</Button>
                        </Stack>

                    </Stack>
                </Stack>
            </>
            }
        </>
    );
}

export default Checkout;