import { Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {URL} from './url'

const ButtoN2 = ({type,item,setAlert, setMsg, setType,setrefresh}) => {
    const [loading,setLoading] = useState(false)
    const approve = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/completew`, {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
    }
    const cancle = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/canclew`, {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
    }
    const deleteorder = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/deletew`, {item})
        if(res.data.status==="success"){
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setrefresh((prev)=>!prev)
        }
        
    }
    const setbg = (status) => {
        if(type === 'completed'){
            return '#fd7e14'
        } else if (type === 'cancelled') {
            return '#dc3545'
        } else {
            return '#28a745'
        }
    }
    const clicked = () => {
        setLoading(true)
        switch (type) {
            case 'delete':
                return deleteorder(item)
                break;
            case 'complete':
                return approve(item)
                break;   
            case 'cancle':
                return cancle(item)
                break;
            default:
                break;
        }
    }
    return (
        <>
            <Button sx={{ color: '#868e96', backgroundColor: '#e9ecef', borderRadius: '20px', padding: '5px 16px', '&:hover': { backgroundColor:type==='complete'||type==='approve'? '#28a745': '#dc3545', color: 'white' } }} onClick={() => { clicked(item) }}>
                {loading ?
                    <CircularProgress sx={{ color: 'white', width: "20px !important", height: '20px !important', padding: "0px 20px" }} />
                    :
            <Typography>{type}</Typography>}</Button>
        </>
    );
}

export default ButtoN2;