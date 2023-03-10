import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import OrdersAD from "./Orders";
import Menu from "./Menu";
import Messages from "./Messages";
import Nav from "./Nav";
import Users from "./Users";
import {  useState } from "react";
import AdminLogin from "./AdminLogin";
import Alertt from "./Alert";
import Withdraw from "./Withdrawls";
import KYC from "./KYC";

const Dashboard = () => {
    const admin = localStorage.getItem('dgfinance')
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState()
    const [type, setType] = useState()
    return (
        <>
            {admin ?
                <>
                <Stack sx={{}}>
                    <Nav />
                    <Stack direction="row" sx={{ }}>
                        <Menu />
                        <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert}/>
                        <Stack sx={{ flex: 4 , '& p,& th,& td,& span':{fontSize:{xs:'0.75rem !important',md:'1rem !important',width:'95%'}},overflowX:'scroll !important' }}>
                            <Routes>
                                <Route path="" element={<Users />} />
                                <Route path="messages" element={<Messages setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="ordersAD" element={<OrdersAD setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="withdraw" element={<Withdraw setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="users" element={<Users />} />
                                <Route path="kyc" element={<KYC setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                            </Routes>
                        </Stack>
                    </Stack>
                    </Stack>
                </>
                :
                <>
                    <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert} />
                    <AdminLogin setMsg={setMsg} setAlert={setAlert} setType={setType}/>
                </>
            }
        </>
    );
}

export default Dashboard;