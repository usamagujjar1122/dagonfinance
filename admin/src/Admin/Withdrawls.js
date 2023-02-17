import {  CircularProgress, Divider, Paper, Stack, Typography,Box } from "@mui/material";
import axios from 'axios';
import {  useEffect, useState } from "react";
import SingleWithdraw from "./singleWithdraw";
import {URL} from './url'

const Withdraw = ({ setAlert, setMsg, setType }) => {
    const [orders,setorders] = useState()
    const [refresh,setrefresh] = useState(false)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const getorders = async () => {
            const res = await axios.get(`${URL}/user/getwithdraw`)
            setorders(res.data.data.filter(item=>item.status==="pending").reverse())
            setLoading(false)
        }
        getorders()
    },[refresh])
    
    return ( 
        <>
        {loading && 
        <Box sx={{width:"100%",height:'100%',backgroundColor:"rgba(0,0,0,0.01)",position:'relative'}}>
            <CircularProgress sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)'}}/>
        </Box>
        }
        {orders && 
        <Stack sx={{padding:'20px',backgroundColor:'#f8f8f8'}}>
                <Paper>
                    <Typography sx={{padding:'20px',fontWeight:'bold',fontSize:'26px'}}>Orders List</Typography>
                    <Divider />
                    {orders.map((item)=>
                    ( <SingleWithdraw item={item} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} key={item._id} />))}
                </Paper>
            </Stack>
            }
        </>
     );
}
 
export default Withdraw;