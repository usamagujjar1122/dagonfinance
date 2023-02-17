import { Button, CircularProgress, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtoN from "./ButtoN";
const SingleOrder = ({item,setAlert, setMsg, setType,setrefresh}) => {
    const setbg = (status) => {
        if(status === 'pending'){
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
                    <Stack sx={{padding:'30px 20px'}} >
                        <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'26px'}}>{item.username}</Typography>
                            <Typography sx={{
                                color:'white',
                                borderRadius:'25px',
                                padding:'2px 10px', 
                                backgroundColor: setbg(item.status)
                                }}>{item.status}</Typography>
                        </Stack>
                        {item.status==='pending' &&
                        <Stack direction="row" sx={{gap:"10px"}}>
                            <ButtoN item={item} type={'approve'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh}/>
                            <ButtoN item={item} type={'cancle'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh}/>

                        </Stack>
                        }
                        {item.status==='approved' &&
                        <Stack direction="row" sx={{gap:"10px"}}>
                            <ButtoN item={item} type={'delete'} setMsg={setMsg} setAlert={setAlert} setType={setType} setrefresh={setrefresh}/>
                        </Stack>
                        }
                        </Stack>
                        <Stack direction={"row"} sx={{gap:"50px"}}>
                            <Stack>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Package : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>method : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Amount : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Date : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Time :</Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Trx :</Typography>

                            </Stack>
                            <Stack>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.package}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.method}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>${item.amount}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.createdat.slice(0,10)}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.createdat.slice(11,16)}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px',cursor:'pointer'}} onClick={()=>copy(item.TrxID)}>{item.TrxID}</Typography>

                            </Stack>
                        </Stack>
                        {/* <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Package : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>BASIC $99</Typography>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Booking date : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>03/02/2023</Typography>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Booking time : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>01:00 AM</Typography>
                        </Stack> */}
                    </Stack>
                    <Divider />
        </>
     );
}
 
export default SingleOrder;