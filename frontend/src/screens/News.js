import { Stack, Typography } from "@mui/material";

const News = () => {
    return ( 
        <>
        <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>F.A.Q & <span style={{ fontWeight: 'bold' }}> ANSWERS</span></Typography>
            </Stack>
            <Stack sx={{padding: { xs: "50px 10px", md: '50px 50px' }, backgroundColor: '#f7f7f7' }}>
                <Typography sx={{color:'gray',fontWeight:'bold'}}>No news found!</Typography>
                <Typography sx={{}}>Visit this page regularly to keep yourself updated about latest company news and updates.</Typography>
            </Stack>
        </>
     );
}
 
export default News;