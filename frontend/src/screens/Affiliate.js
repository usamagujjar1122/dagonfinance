import { Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
const Affiliate = () => {
    const md = useMediaQuery('(min-width:1100px)');

    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>AFFILIATE<span style={{ fontWeight: 'bold' }}> PROGRAM</span></Typography>
            </Stack>
            <Stack sx={{ padding: { xs: "20px 10px", md: '20px 50px' }, background: 'url(img/featuresbg.png) no-repeat bottom center #182128' }}>
                <Stack direction={md ? "row" : 'column'} sx={{ alignItems: 'center', gap: '20px', padding: "20px 0px" }}>
                    <Stack sx={{ flex: 1, gap: '10px' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '22px', md: '30px' } }}>HOW TO <span style={{ color: '#35c555' }}>REFER</span></Typography>
                        <Typography sx={{ fontWeight: "500", color: 'white' }}>Ever heard of a place where you get paid for inviting your friends to make money? It may sound like a joke, but we are not kidding you. Welcome to our affiliate program where you earn a commission on every cash made by your downline. ETHRIC INVEST, LLC website provides you with a fast and straightforward solution to give your business an online presence while making money by the side.</Typography>
                    </Stack>
                    <Stack sx={{ flex: 1, alignItems: 'center','&>img':{maxWidth:{xs:'220px',md:'360px'} } }}>
                        <img src="img/affiliatethumb.png" alt=""  />
                    </Stack>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ alignItems: 'center', gap: '20px', padding: "20px 0px" }}>
                    <Stack sx={{ flex: 1, alignItems: 'center','&>img':{maxWidth:{xs:'220px',md:'360px'}} }}>
                        <img src="img/benifitthumb.png" alt=""  />
                    </Stack>
                    <Stack sx={{ flex: 1, gap: '10px' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '22px', md: '30px' } }}>BENEFITS OF <span style={{ color: '#35c555' }}>WORKING WITH US</span></Typography>
                        <ul>
                            <li style={{ color: 'white' }}><Typography sx={{ fontWeight: "500", color: 'white' }}>Through our partnership, you will get real-time alerts when new referrals become available.</Typography></li>
                            <li style={{ color: 'white' }}><Typography sx={{ fontWeight: "500", color: 'white' }}>Through our partnership, you will get real-time alerts when new referrals become available.</Typography></li>
                            <li style={{ color: 'white' }}><Typography sx={{ fontWeight: "500", color: 'white' }}>Through our partnership, you will get real-time alerts when new referrals become available.</Typography></li>
                            <li style={{ color: 'white' }}><Typography sx={{ fontWeight: "500", color: 'white' }}>Through our partnership, you will get real-time alerts when new referrals become available.</Typography></li>
                        </ul>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ background: 'linear-gradient(90deg, rgba(0,187,170,1) 0%, rgba(53,197,85,1) 100%)', padding: { xs: "20px 10px", md: "30px" }, alignItems: 'center' }}>
                <Stack sx={{ position: 'relative', background: 'url(img/referralbg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minWidth: '450px', aspectRatio: '1', alignItems: 'center',  }}>
                    <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', gap: "1.6rem", alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>REFERAL</Typography>
                        <Typography sx={{ fontWeight: '900', fontSize: '36px' }}>UPTO 10%</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>BONUS</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:'center',gap:'10px'}}>
                    <Typography sx={{fontSize:{xs:"22px",md:'30px',color:'white'},fontWeight:'bold'}}>AFFILIATE PROGRAM</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white',textAlign:'center' }}>Share your ETHRIC INVEST, LLC referral link and invite your friends and family to this wonderful platform and make passive income using affiliate program up to 15%. To earn affiliate income, you do not even need an active investment with ETHRIC INVEST, LLC</Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Affiliate;