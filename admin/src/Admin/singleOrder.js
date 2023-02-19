import { Box, Button, CircularProgress, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtoN from "./ButtoN";
const SingleOrder = ({ item, setAlert, setMsg, setType, setrefresh }) => {
    const setbg = (status) => {
        if (status === 'pending') {
            return '#fd7e14'
        } else if (status === 'cancelled') {
            return '#dc3545'
        } else {
            return '#28a745'
        }
    }
    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
    }
    return (
        <>
            <Stack sx={{ padding: { xs: '10px', md: '30px 20px' } }} >
                <Stack sx={{ gap: { xs: '10px', md: "10px" } }}>
                <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Username : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>{item.username}</Typography>
                    </Stack>
                    <Stack direction={"row"} sx={{alignItems:'center'}}>
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Status : </Typography>
                        <Box sx={{flex:2}}><Typography sx={{maxWidth:'fit-content', color: 'gray', fontSize: '18px',background:setbg(item.status),color:'white',padding:'5px 10px',borderRadius:'25px', }}>{item.status}</Typography></Box>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Package : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>{item.package}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Amount : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>${item.amount}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Date : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>{item.createdat.slice(0, 10)}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Time : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>{item.createdat.slice(11, 16)}</Typography>
                    </Stack>
                    <Stack direction={"row"} >
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Method : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px' }}>{item.method}</Typography>
                    </Stack>
                    <Stack direction={"row"} sx={{maxWidth:'100%'}}>
                        <Typography sx={{ flex:1,fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap',flex:1 }}>Trx : </Typography>
                        <Typography sx={{flex:2, color: 'gray', fontSize: '18px', cursor: 'pointer',overflowWrap:'anywhere'}} onClick={() => copy(item.TrxID)}>{item.TrxID}</Typography>
                    </Stack>
                    <Stack direction={"row"} sx={{alignItems:'center'}}>
                        <Typography sx={{flex:1, fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>Action : </Typography>
                        {item.status === 'pending' &&
                            <Stack direction="row" sx={{flex:2, gap: "10px", padding: '5px 0px' }}>
                                <ButtoN item={item} type={'approve'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />
                                <ButtoN item={item} type={'cancle'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />

                            </Stack>
                        }
                        {item.status === 'approved' &&
                            <Stack direction="row" sx={{flex:2, gap: "10px", padding: '5px 0px' }}>
                                <ButtoN item={item} type={'delete'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh} />
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
        </>
    );
}

export default SingleOrder;