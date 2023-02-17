import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
const Footer = () => {
    const md = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Stack sx={{position:'static',bottom:0}}>
                <Grid container sx={{ justifyContent: 'center', padding: { xs: '20px 10px', md: '20px 50px' } }} spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ textAlign: 'center' }}>
                        <img src="img/ethereum.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ textAlign: 'center' }}>
                        <img src="img/litecoin.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ textAlign: 'center' }}>
                        <img src="img/ripple.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ textAlign: 'center' }}>
                        <img src="img/payeer.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ textAlign: 'center' }}>
                        <img src="img/bitcoin.png" alt="" />
                    </Grid>
                </Grid>
                <Stack direction={md? 'row':"column"} sx={{ backgroundColor: '#2a3842', padding: { xs: '20px 10px', md: '20px 50px' },justifyContent:'space-between',alignItems:'top',gap:'20px' }}>
                    <Stack sx={{ gap: {xs:"0px",md:'10px'},flex:1 }}>
                        <Typography sx={{ color: 'white', fontWeight: '900', fontSize: { xs: '18px', md: "32px" }, whiteSpace: 'nowrap' }}>DAGON FINANCE</Typography>
                        <Typography sx={{ color: 'white', fontSize: { xs: '10px', md: "14px" } }}>© 2022. ethricinvest.com. All Rights Reserved</Typography>
                    </Stack>
                    <Stack sx={{ gap: {xs:"0px",md:'10px'} ,flex:1}}>
                        <Typography sx={{ color: '#2dc362', fontWeight: '900', fontSize: { xs: '14px', md: "18px" }, whiteSpace: 'nowrap' }}>NAVIGATION</Typography>
                        <Stack direction="row" sx={{gap:'100px'}}>
                            <Stack>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>HOME</Typography>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>ABOUT</Typography>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>HOW TO INVEST</Typography>
                            </Stack>
                            <Stack>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>F.A.Q</Typography>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>Rules</Typography>
                                <Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>support</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ gap: {xs:"0px",md:'10px'} ,flex:1}}>
                    <Typography sx={{ color: '#2dc362', fontWeight: '900', fontSize: { xs: '14px', md: "18px" }, whiteSpace: 'nowrap' }}>CONTACTS</Typography>
                        <Stack direction="row" sx={{alignItems:'center',gap:'10px'}}>
                            <LocationOnIcon sx={{ color: '#e1c903', fontSize:{xs:'22px', md:"26px"}}} />
                            <Typography sx={{ color: 'white', fontSize: { xs: '10px', md: "14px" } }}>© 2022. ethricinvest.com. All Rights Reserved</Typography>  
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'10px'}}>
                            <EmailIcon sx={{ color: '#e1c903', fontSize:{xs:'22px', md:"26px"}}} />
                            <Typography sx={{ color: 'white', fontSize: { xs: '10px', md: "14px" } }}>mybusinessgamil@gmail.com</Typography>  
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Footer;