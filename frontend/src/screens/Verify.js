import { CircularProgress, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { URL } from "../url";

const Verify = () => {
    const [searchParams] = useSearchParams()
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState()
    const token = searchParams.get('token')
    const verify = async () => {
        const res = await axios.post(`${URL}/user/verify`,{token:token})
        console.log(res.data)
        setData(res.data)
        setLoading(false)
    }
    useEffect(()=>{
        verify()
    },[])
    return ( 
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>EMAIL <span style={{ fontWeight: 'bold' }}>VERIFICATION</span></Typography>
            </Stack>
            {
                loading &&
                <Stack sx={{position:'relative', background: 'url(img/featuresbg.png) no-repeat bottom center #182128', padding: { xs: '50px 50px', md: "50px 20px" },minHeight:'70vh', alignItems: 'center', gap: '30px' }}>
                    <CircularProgress sx={{color:'white',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} />
                 </Stack>
            }
            {!loading &&
            <Stack sx={{ background: 'url(img/featuresbg.png) no-repeat bottom center #182128', padding: { xs: '50px 10px', md: "50px 20px" }, alignItems: 'center', gap: '30px' }}>
                    <Typography sx={{textAlign:'center',color:'lime',fontSize:{xs:'18px',md:'32px'}}}>{data.message}</Typography>
                    <Typography sx={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:{xs:'12px',md:'16px'}}}>Now you may login with your username and password to continue.</Typography>
            </Stack>
            }
        </>
     );
}
 
export default Verify;