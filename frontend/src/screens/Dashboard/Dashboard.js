import {  Stack, Typography } from "@mui/material";
import Sidebar from "../../comp/sidebar";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Deposit from "./Deposit";
import Deposits from "./Deposits";
import History from "./History";
import Referals from "./Referals";
import Withdrawl from "./Withdrawl";
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./Checkout";
import { useEffect,useState } from "react";
import { loaddepositlist, loaddeposits, loadhistory, loadreferallist, loadUser } from "../../Redux/action/userActions";
import Calculator from "./calculator";
const Dashboard = () => {
    const dispatch = useDispatch()
    const md = useMediaQuery('(min-width:1100px)');
    const user = useSelector((state)=>state.user.user)
    const [refresh,setrefresh] = useState(false)
    useEffect(()=>{
        if(user){
        dispatch(loaddeposits(user))
        dispatch(loaddepositlist(user))
        dispatch(loadreferallist(user))
        dispatch(loadhistory(user))
        }
        },[user])
    useEffect(()=>{
        dispatch(loadUser(localStorage.getItem('dftoken')))
    },[refresh])
    return (
        <>
            { user && <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>USER <span style={{ fontWeight: 'bold' }}> DASHBOARD</span></Typography>
            </Stack>
            <Stack direction={md?'row':'column'} sx={{padding: { xs: "20px 10px", md: "50px" },background:"url(img/featuresbg.png) no-repeat bottom center #182128",gap:'50px','& p':{fontSize:{xs:'0.8rem',md:'1rem'}}}}>
                <Sidebar />
                <Routes>
                    <Route path="" element={<Account />} />
                    <Route path="/deposit" element={<Deposit setrefresh={setrefresh}/>} />
                    <Route path="/deposits" element={<Deposits />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/referals" element={<Referals setrefresh={setrefresh}/>} />
                    <Route path="/withdrawl" element={<Withdrawl setrefresh={setrefresh}/>} />
                    <Route path="/edit" element={<Edit setrefresh={setrefresh}/>} />
                    <Route path="/checkout" element={<Checkout setrefresh={setrefresh}/>} />
                    <Route path="/calculate" element={<Calculator />} />
                    <Route path="*" element={<Account />} />
                </Routes>
            </Stack>
            </>
            }
        </>
    );
}

export default Dashboard;