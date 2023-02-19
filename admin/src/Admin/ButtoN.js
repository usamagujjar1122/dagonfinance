import { Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {URL} from './url'

const ButtoN = ({type,item,setAlert, setMsg, setType,setrefresh}) => {
    const [loading,setLoading] = useState(false)
    const approve = async (item) => {
        // setLoading(true)
        // const res1 = await axios.post(`${URL}/user/loaduserwithid`, {id:item.user})
        // item.user = res1.data.data
        // const res = await axios.post(`${URL}/user/deposit`, item)
        // if(res.data.success){
        //     const res2 = await axios.post(`${URL}/user/approve`, {item})
        //     if(res2.data.status==="success"){
        //         setAlert(true)
        //         setMsg(res.data.message)
        //         setType('success')
        //         setrefresh((prev)=>!prev)
        //     }
        // }
        setLoading(true)
        const res1 = await axios.post(`${URL}/user/loaduserwithid`, {id:item.user})
        item.user = res1.data.data
        const res2 = await axios.post(`${URL}/user/approve`, {item})
        if(res2.data.status==="success"){
            const res = await axios.post(`${URL}/user/deposit`, item)
            if(res.data.success){
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setrefresh((prev)=>!prev)
            }
        }

    }
    const cancle = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/cancle`, {item})
        if(res.data.status==="success"){
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setrefresh((prev)=>!prev)
        }
    }
    const deleteorder = async (item) => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/delete`, {item})
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
            case 'approve':
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
            <Button sx={{ color: '#868e96', backgroundColor: '#e9ecef', borderRadius: '20px', padding: {xs:"5px 10px",md:'5px 16px'}, '&:hover': { backgroundColor:type==='complete'||type==='approve'? '#28a745': '#dc3545', color: 'white' } }} size="small" onClick={() => { clicked(item) }}>
                {loading ?
                    <CircularProgress sx={{ color: 'white', width: "20px !important", height: '20px !important', padding: "0px 20px" }} />
                    :
            <Typography sx={{fontSize:{xs:'0.75rem !important',md:'1rem'}}}>{type}</Typography>}</Button>
        </>
    );
}

export default ButtoN;