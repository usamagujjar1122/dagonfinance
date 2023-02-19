import {  CircularProgress, Divider, Paper, Stack, Typography,Box } from "@mui/material";
import axios from 'axios';
import {  useEffect, useState } from "react";
import SingleOrder from "./singleOrder";
import {URL} from './url'

const OrdersAD = ({ setAlert, setMsg, setType }) => {
    const [orders,setorders] = useState()
    const [refresh,setrefresh] = useState(false)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const getorders = async () => {
            const res = await axios.get(`${URL}/user/getrequests`)
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
        <Stack sx={{padding:{xs:'5px',md:'20px'},backgroundColor:'#f8f8f8'}}>
                <Paper>
                    <Typography sx={{padding:{xs:'10px',md:'20px'},fontWeight:'bold',fontSize:'26px'}}>Deposit Requests</Typography>
                    <Divider />
                    {orders.map((item)=>
                    ( <SingleOrder item={item} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} key={item._id} />))}
                </Paper>
            </Stack>
            }
        </>
     );
}
 
export default OrdersAD;