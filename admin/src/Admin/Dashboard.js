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

const Dashboard = () => {
    const admin = localStorage.getItem('dgfinance')
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState()
    const [type, setType] = useState()
    return (
        <>
            {admin ?
                <>
                    <Nav />
                    <Stack direction="row" sx={{}}>
                        <Menu />
                        <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert}/>
                        <Stack sx={{ flex: 4 }}>
                            <Routes>
                                <Route path="" element={<Users />} />
                                <Route path="messages" element={<Messages />} />
                                <Route path="ordersAD" element={<OrdersAD setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="withdraw" element={<Withdraw setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="users" element={<Users />} />
                            </Routes>
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