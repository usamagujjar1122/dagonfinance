import { Box, CircularProgress, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from './url'
import SingleMessage from "./singleMessage";

const Messages = () => {
    const [msgs, setmsgs] = useState([])
    const [refresh, setrefresh] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const getmsgs = async () => {
            const res = await axios.get(`${URL}/user/getmsgs`)
            setmsgs(res.data.data.reverse())
            setLoading(false)
        }
        getmsgs()
    }, [refresh])
    
    return (
        <>
        {loading && 
        <Box sx={{width:"100%",height:'100%',backgroundColor:"rgba(0,0,0,0.01)",position:'relative'}}>
            <CircularProgress sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)'}}/>
        </Box>
        }
            {msgs &&
                <Stack sx={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
                    <Paper>
                        <Typography sx={{ padding: '20px', fontWeight: 'bold', fontSize: '26px' }}>Inbox</Typography>
                        <Divider />
                        {msgs.map((item) => (
                            <SingleMessage item={item} setrefresh={setrefresh} key={item._id}/>
                        ))}
                        <Divider />

                    </Paper>
                </Stack>
            }
        </>
    );
}

export default Messages;