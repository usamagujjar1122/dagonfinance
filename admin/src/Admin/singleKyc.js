import { Box, Button, CircularProgress, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtoN from "./ButtoN";
import ButtoN3 from "./Button3";
import Model from './Model'
const SingleKyc = ({ item, setAlert, setMsg, setType, setrefresh }) => {
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState();
    const setbg = (status) => {
        if (status === 'pending') {
            return '#fd7e14'
        } else if (status === 'cancelled') {
            return '#dc3545'
        } else {
            return '#28a745'
        }
    }

    const handleopen=(img)=>{
        console.log('clicked')
        setOpen(true)
        setImg(img)
    }
    return (
        <>
            <Stack sx={{ padding: { xs: '10px', md: '30px 20px' } }} >
                <Stack sx={{ gap: { xs: '10px', md: "10px" } }}>
                    <Stack direction={"row"} >
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Document Type : </Typography>
                        <Typography sx={{ flex: 2, color: 'gray', fontSize: '18px' }}>{item.catagory}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Full Name : </Typography>
                        <Typography sx={{ flex: 2, color: 'gray', fontSize: '18px' }}>{item.name}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Username : </Typography>
                        <Typography sx={{ flex: 2, color: 'gray', fontSize: '18px' }}>{item.username}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Email : </Typography>
                        <Typography sx={{ flex: 2, color: 'gray', fontSize: '18px' }}>{item.email}</Typography>
                    </Stack>
                    <Stack direction={"row"} sx={{alignItems:'center'}}>
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Status : </Typography>
                        <Box sx={{flex:2}}><Typography sx={{flex:2,maxWidth:'fit-content', color: 'gray', fontSize: '18px',background:setbg(item.status),color:'white',padding:'5px 10px',borderRadius:'25px', }}>{item.status}</Typography></Box>
                    </Stack>
                    <Stack direction={"row"} sx={{alignItems:'center'}}>
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Document : </Typography>
                        <Box sx={{flex:2}}><img src={item.image} alt="" style={{maxWidth:'60vw',maxHeight:'200px',cursor:'pointer'}} onClick={()=>{handleopen(item.image)}}/></Box>
                    </Stack>
                    <Stack direction={"row"} sx={{alignItems:'center'}}>
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Image : </Typography>
                        <Box sx={{flex:2}}><img src={item.pic} alt="" style={{flex:2,maxWidth:'60vw',maxHeight:'200px',cursor:'pointer'}} onClick={()=>{handleopen(item.pic)}}/></Box>
                    </Stack>
                    
                    <Stack direction={"row"} sx={{ alignItems: 'center' }}>
                        <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Action : </Typography>
                        {item.status === 'pending' &&
                            <Stack direction="row" sx={{ flex: 2, gap: "10px", padding: '5px 0px' }}>
                                <ButtoN3 item={item} type={'verify'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />
                                <ButtoN3 item={item} type={'cancle'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />

                            </Stack>
                        }
                        {item.status === 'approved' &&
                            <Stack direction="row" sx={{ flex: 2, gap: "10px", padding: '5px 0px' }}>
                                <ButtoN3 item={item} type={'delete'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Model open={open} img={img} setOpen={setOpen} />

        </>
    );
}

export default SingleKyc;