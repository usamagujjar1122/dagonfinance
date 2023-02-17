import { CircularProgress, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import {URL} from './url'

const SingleMessage = ({item,setrefresh}) => {
    const [loading,setLoading] = useState(false)
    const changestatus = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/msgstatus`, { item })
        if (res.data.status === "success") {
            setrefresh((prev) => !prev)
            document.body.style.cursor='auto'
        }
    }
    return (
        <Stack sx={{ padding: '30px 20px', '&:hover': { backgroundColor: item.status === "new" && "#DADADA", cursor: item.status === "new" && 'pointer' } }} onClick={() => { changestatus(item) }}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack sx-={{}}>
                    <Stack direction="row" sx={{ alignItems: 'center', gap: "20px" }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '26px' }}>{item.name}</Typography>
                        <Typography sx={{
                            display: item.status === 'new' ? 'flex' : 'none',
                            color: 'white',
                            borderRadius: '25px',
                            padding: '2px 10px',
                            backgroundColor: '#dc3545',
                            textTransform: 'capitalize'
                        }}>
                            {loading?
                            <CircularProgress sx={{ color: 'white', width: "18px !important", height: '18px !important',padding:'5px' }} />
                            :
                            <span>{item.status}</span>

                            }   
                        </Typography>
                    </Stack>
                    <Typography sx={{ color: 'gray', marginLeft: '0px' }}>{item.email}</Typography>
                </Stack>
                <Stack>
                    <Typography sx={{ color: 'gray' }}>Date : {item.createdat.slice(0, 10)}</Typography>
                    <Typography sx={{ color: 'gray' }}>Time: {item.createdat.slice(11, 19)}</Typography>
                </Stack>
            </Stack>
            <Typography sx={{ fontSize: '18px', color: 'gray' }}>{item.msg}</Typography>
        </Stack>
    );
}

export default SingleMessage;