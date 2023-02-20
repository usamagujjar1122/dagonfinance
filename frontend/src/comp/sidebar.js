import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const user = useSelector((state)=>state.user.user)
    
    return ( 
        <>
            <Stack sx={{flex:1,borderRadius:'10px',alignItems:'center',backgroundColor:'#edd50e',gap:'20px',padding:'20px'}}>
                <Avatar sx={{width:'100px',height:'100px',backgroundColor:'#222'}}></Avatar>
                <Stack sx={{alignItems:'center'}}>
                <Typography >WELCOME</Typography>
                <Typography sx={{fontWeight:'600'}}>{user&& user.username}</Typography>
                </Stack>
                <Stack sx={{gap:'10px',width:'90%'}}>
                <Link to='deposit' style={{textDecoration:'none',color:'#222',textAlign:'center'}}>
                <Button sx={{padding:'5px 20px',borderRadius:'25px',backgroundColor:'#222',color:'white',fontWeight:'bold','&:hover':{backgroundColor:'#444'},whiteSpace:'nowrap'}}>DEPOSITE NOW</Button>
                </Link>
                <Link to='withdrawl' style={{textDecoration:'none',color:'#222',textAlign:'center'}}>
                <Button sx={{padding:'5px 20px',borderRadius:'25px',backgroundColor:'#222',color:'white',fontWeight:'bold','&:hover':{backgroundColor:'#444'},whiteSpace:'nowrap'}}>WITHDRAW NOW</Button>
                </Link>
                </Stack>
                <Stack sx={{width:'100%'}}>
                    
                    <Link to='' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav1.png?alt=media&token=17c5c639-232f-407c-b9d3-f7a30d54c7cf" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>ACCOUNT</Typography>
                    </Stack>
                    </Link>
                    <Link to='deposit' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav2.png?alt=media&token=bf24d2cf-88b6-439b-babd-f414de478dc7" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>DEPOSIT NOW</Typography>
                    </Stack>
                    </Link>
                    <Link to='deposits' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav3.png?alt=media&token=9f80430e-4c54-41e8-953e-3b7fdab9505c" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>ACTIVE DEPOSIT</Typography>
                    </Stack>
                    </Link>
                    <Link to='history' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav4.png?alt=media&token=a1fb9978-430a-4f58-9ecb-0ffeb93ced92" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>HISTORY</Typography>
                    </Stack>
                    </Link>
                    <Link to='referals' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav5.png?alt=media&token=2a32d1c9-210e-4ccd-b442-3902f8e39e01" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>REFERAL</Typography>
                    </Stack>
                    </Link>
                    <Link to='withdrawl' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav7.png?alt=media&token=4f32c1e7-fe97-4190-8416-55f38dff6a69" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>WITHDRAW</Typography>
                    </Stack>
                    </Link>
                    <Link to='KYC' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav8.png?alt=media&token=98a8104e-ae5b-480c-891a-152af27191ff" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>KYC VERIFY</Typography>
                    </Stack>
                    </Link>
                    <Link to='edit' style={{textDecoration:'none',color:'#222'}}>
                    <Stack direction="row" sx={{alignItems:'center',gap:'10px',borderBottom:'1px solid black',padding:'5px'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/profile-b6a08.appspot.com/o/accnav8.png?alt=media&token=98a8104e-ae5b-480c-891a-152af27191ff" alt="" />
                        <Typography sx={{fontWeight:'600','&:hover':{color:'white'}}}>EDIT</Typography>
                    </Stack>
                    </Link>

                </Stack>
            </Stack>
        </>
     );
}
 
export default Sidebar;