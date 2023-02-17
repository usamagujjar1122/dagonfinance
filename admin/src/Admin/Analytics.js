import {URL} from './url'
import { Box, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import DraftsIcon from '@mui/icons-material/Drafts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
  
  
const Analytics = () => {
  
  const [msgs,setmsgs] = useState()
  const [orders,setorders] = useState()
  const [imgs,setimgs] = useState()
  const [users,setusers] = useState()
  const [data,setdata] = useState()
  const [loading,setLoading] = useState(true)
  const loaddata = async () =>{
    
      const res = await axios.get(`${URL}/user/getmsgs`)
      setmsgs(res.data.data)
      const res1 = await axios.get(`${URL}/user/getorders`)
      setorders(res1.data.data)
      const res3 = await axios.get(`${URL}/user/loadimgs`)
      setimgs(res3.data.data)
      setLoading(false)
  }
  // var weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  //   var next = weekday.slice(date.getDay()+1)
  //   var prev = weekday.reverse().slice(date.getDay())
    
  //   var days = prev.concat(next.reverse())
  useEffect(()=>{
    loaddata()
  },[])
  
    return ( 
        <>
        {loading && 
        <Box sx={{width:"100%",height:'100%',backgroundColor:"rgba(0,0,0,0.01)",position:'relative'}}>
            <CircularProgress sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)'}}/>
        </Box>
        }
        {msgs && orders && users && imgs &&
            <Stack sx={{padding:'20px',backgroundColor:'#f8f8f8'}}>
                <Stack direction="row" sx={{gap:'20px',marginBottom:'50px'}}>
                    <Paper sx={{gap:"26px",backgroundColor:'#007bff',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{msgs.length} Messages</Typography>
                            <DraftsIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="messages" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#ffc107',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{orders.length} Orders</Typography>
                            <BeenhereIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="ordersAD" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#28a745',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{users.length} Users</Typography>
                            <PersonIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="users" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#dc3545',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{imgs.length} Images</Typography>
                            <StarIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="portfolio" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                </Stack>
            </Stack>
          }

        </>
     );
}
 
export default Analytics;