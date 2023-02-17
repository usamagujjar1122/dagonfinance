import { Alert, Stack, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
const Alertt = ({ type,msg,alert,setAlert }) => {
    useEffect(()=>{
        if(alert===true){
            setTimeout(()=>{setAlert(false)},5000)
        }
    })
    return (
        <>
                <Stack sx={{ width: 'fit-content',zIndex:2,position:'fixed',top:'5%',right:'5%',opacity:alert? 1:0 ,transform:alert? 'none' :'translateX(150%)',transition:'transform 0.3s' }} spacing={2}>
                    <Alert severity={type}>{msg}</Alert>
                </Stack>

        </>
    );
}

export default Alertt;