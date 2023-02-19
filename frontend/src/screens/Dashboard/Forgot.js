import { CircularProgress, Button, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { URL } from '../../url'
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../Redux/action/alertactions";
import { LOADING, SET_LOADING } from "../../Redux/types";
const Forgot = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const md = useMediaQuery('(min-width:800px)');
    const isLoading = useSelector(state=>state.user.isLoading)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [repass, setrepass] = useState()
    const [match, setmatch] = useState(false)
    const [seca, setseca] = useState()
    const [data, setdata] = useState()
    const handleemail = async () => {
        try {
            dispatch({
                type: LOADING,
              });
            const res = await axios.post(`${URL}/user/forgot`, { email: email })
            if (res.data.success) {
                dispatch(setAlert(res.data.message, "success"))
                dispatch({
                    type: SET_LOADING,
                  });
                setdata(res.data.data)
            }

        } catch (err) {
            dispatch(setAlert(err.response.data.message, "error"))
            dispatch({
                type: SET_LOADING,
              });
        }
    }
    const handlesecret = async () => {
        if (seca === data.seca) {
            dispatch(setAlert("Please select a new password", "success"))
            setmatch(true)
        } else {
            dispatch(setAlert("Incorrect answer", "error"))
        }
    }
    const handlereset = async () =>{
        try {
            dispatch({
                type: LOADING,
              });
            const res = await axios.post(`${URL}/user/reset`, { email:email,password: password,repass: repass })
            if (res.data.success) {
                dispatch(setAlert(res.data.message, "success"))
                dispatch({
                    type: SET_LOADING,
                  });
                navigate('/login')
            }
        } catch (err) {
            console.log(err)
            dispatch(setAlert(err.response.data.message, "error"))
            dispatch({
                type: SET_LOADING,
              });
        }
    }
    return (
        <>

            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>RETRIVE <span style={{ fontWeight: 'bold' }}> PASSWORD</span></Typography>
            </Stack>
            {!data &&
                <>
                    <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                        <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '20px', alignItems: 'center', width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#35c555' }}>ENTER YOUR </span>EMAIL</Typography>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Email:</Typography>
                                <input type="text" style={{ width: '70%', padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </Stack>
                            <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={handleemail} disabled = {isLoading}>
                            {!isLoading &&<Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>SEND</Typography>}
                    {isLoading &&<CircularProgress sx={{color:'white', width: "24px !important", height: '24px !important', padding: "0px 8px"}} />}
                            </Button>
                        </Stack>
                    </Stack>
                </>
            }
            {data && !match &&
                <>
                    <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                        <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '20px', alignItems: 'center', width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#35c555' }}>ENTER YOUR </span>SECRET ANSWER</Typography>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Secret Question:</Typography>
                                <input type="text" style={{ width: '70%', padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={data.secq} readonly />
                            </Stack>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Secret Answer:</Typography>
                                <input type="text" style={{ width: '70%', padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={seca} onChange={(e) => { setseca(e.target.value) }} />
                            </Stack>
                            <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={handlesecret}>SUBMIT</Button>
                        </Stack>
                    </Stack>
                </>
            }

            {match &&
                <>
                    <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                        <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '20px', alignItems: 'center', width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '32px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#35c555' }}>ENTER NEW </span>PASSWORD</Typography>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Password</Typography>
                                <input type="password" style={{ width: '70%', padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
                            </Stack>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Confirm Password</Typography>
                                <input type="password" style={{ width: '70%', padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={repass} onChange={(e) => { setrepass(e.target.value) }} />
                            </Stack>
                            <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={handlereset}>SUBMIT</Button>
                        </Stack>
                    </Stack>
                </>
            }
            <Stack sx={{ background: 'linear-gradient(90deg, rgba(0,187,170,1) 0%, rgba(53,197,85,1) 100%)', padding: { xs: "20px 10px", md: "30px" }, alignItems: 'center' }}>
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '20px', md: '30px' } }}>IF YOU ARE NEW TO DAGON FINANCE</Typography>
                <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }}>SIGNUP</Button>

            </Stack>
        </>
    );
}

export default Forgot;