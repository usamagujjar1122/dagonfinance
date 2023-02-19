import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { msg } from "../Redux/action/userActions";

const Contact = () => {
    const md = useMediaQuery('(min-width:800px)');
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [mmsg,setmmsg] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleclick = () => {
        const formdata = {
            name:name,email:email,msg:mmsg
        }
        dispatch(msg(formdata,navigate))
    }
    return ( 
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>CONTACT <span style={{ fontWeight: 'bold' }}> US</span></Typography>
            </Stack>
            <Stack direction={md?'row':'column'} sx={{ padding: { xs: "50px 10px", md: '50px 50px' },alignItems:'center',background:'url(images/featuresbg.png) no-repeat bottom center #182128',gap:'20px' }}>
                <Stack sx={{flex:1,gap:'10px'}}>
                    <Typography sx={{fontSize:{xs:'22px',md:'32px',color:'white',fontWeight:'bold'}}}>DO YOU HAVE <span style={{color:'#35c555'}}> ANY QUESTIONS?</span></Typography>
                    <Typography sx={{color:'white',fontWeight:'500'}}>We strongly recommend that you start searching for the necessary information in the FAQ section. If you need advice or technical assistance, do not hesitate to contact our specialists. Customer support is available around the clock. You just need to send a letter or a request via the feedback form to promptly receive the necessary assistance. Remember that the more detailed the description of your problem is, the sooner it will be solved. Do not forget to indicate your login, if you are a registered user of the website.</Typography>
                </Stack>
                <Stack sx={{flex:1}}>
                <Grid container sx={{marginBottom:'50px'}}>
                    <Grid item xs={12} >
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactlocation.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white',textAlign:'center'}}>85th Floor, Lower Manhattan, Suite 8500,New York, NY 10007, USA</Typography>
                    </Stack>
                    </Grid>
                    <Grid item xs={12} >
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactphone.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white'}}>+16127247789</Typography>
                    </Stack>
                    </Grid>
                    <Grid item xs={12} >
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactemail.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white'}}>dagonfinance@gmail.com</Typography>
                    </Stack>
                    </Grid>
                </Grid>
                </Stack>
            </Stack>
            <Stack sx={{ background: 'linear-gradient(90deg, rgba(0,187,170,1) 0%, rgba(53,197,85,1) 100%)', padding: { xs: "20px 10px", md: "30px" }, alignItems: 'center' }}>
                <Typography sx={{color:'white',fontSize:{xs:'22px',md:'32px'},fontWeight:'bold'}}>SUND US <span style={{fontWeight:'500'}}> A MESSAGE</span></Typography>
                <Stack direction={md?"row":'column'} sx={{width:{xs:'90%',md:'60%'},gap:{xs:'20px',md:'50px'}}}>
                    <Box sx={{flex:1}}>
                        <Typography sx={{color:'white'}}>Your Name</Typography>
                        <input type="text" style={{padding:'10px',border:'none',outline:'none',width:'95%'}} value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    </Box>
                    <Box sx={{flex:1}}>
                        <Typography sx={{color:'white'}}>Your Email</Typography>
                        <input type="text" style={{padding:'10px',border:'none',outline:'none',width:'95%'}} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    </Box>
                </Stack>
                <Stack sx={{width:{xs:'90%',md:'60%',marginTop:'20px'}}}>
                        <Typography sx={{color:'white'}}>Your Message</Typography>
                        <textarea type="text" style={{padding:'10px',border:'none',outline:'none',width:{xs:'95%',md:'100%'}}} rows="5" value={mmsg} onChange={(e)=>{setmmsg(e.target.value)}}/>
                    </Stack>
                    <Button sx={{backgroundColor:"#444",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',backgroundColor:'#edd50e'},fontWeight:'bold',marginTop:'20px'}} onClick={handleclick}>Send</Button>

            </Stack>
        </>
     );
}
 
export default Contact;