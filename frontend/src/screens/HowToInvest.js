import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

const HowTo = () => {
    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>HOW TO <span style={{ fontWeight: 'bold' }}> INVEST</span></Typography>
            </Stack>
            <Stack sx={{ background: 'url(img/featuresbg.png) no-repeat bottom center #182128', padding: { xs: '20px 10px', md: "20px 20px" }, alignItems: 'center', gap: '30px' }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px', color: 'white', fontWeight: 'bold' } }}>WHERE TO <span style={{ color: '#35c555' }}> BUY</span></Typography>
                <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>If you are already a Bitcoin user and ready to invest, it's time to refill your address balance. On the Internet there are many websites where you can find information about your nearest cryptocurrency seller. You will find a lot of exchange points where you can buy Bitcoin using any convenient method of payment, and even your local currency. Below you will find a list of websites with a high degree of confidence:</Typography>
                <Button sx={{ background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);' }, fontWeight: 'bold' }}>INVEST NOW</Button>
                <Box direction="row" sx={{ width: '70%', gap: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://btcmanager.com/buy-bitcoin" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>BTC MANAGER</Button></a>
                    <a href="https://www.bitcoin.com/buy-bitcoin" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>BITCOIN.COM</Button></a>
                    <a href="https://howtobuybitcoins.info" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>HOW TO BUY BITCOIN</Button></a>
                    <a href="https://www.coinbase.com/buy-bitcoin?locale=en" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>COINBASE</Button></a>
                    <a href="https://localbitcoins.com/buy_bitcoins" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>LOCALBITCOINS.COM</Button></a>
                    <a href="https://www.buybitcoinworldwide.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>BUY BITCOIN WORLDWIDE</Button></a>
                    <a href="https://cex.io/buy-bitcoins" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>CEX:10</Button></a>
                    <a href="https://www.coinmama.com/bitcoins" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>COIN MAMA</Button></a>
                    <a href="https://paxful.com/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>PAXFUL</Button></a>
                    <a href="https://bitbargain.co.uk/buy" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><Button sx={{ width: "fit-content", background: 'rgba(0,0,0,0.1)', color: 'white', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold', whiteSpace: 'nowrap' }}>UK BITCOIN MARKET</Button></a>
                </Box>
            </Stack>
            <Stack sx={{ background: 'linear-gradient(90deg, rgba(0,187,170,1) 0%, rgba(53,197,85,1) 100%)', padding: { xs: "20px 10px", md: "50px" }, alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px', color: 'white',marginBottom:'20px' } }}>HOW DOES IT <span style={{ fontWeight: 'bold' }}> WORKS?</span></Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork1.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>REGISTRATION</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork2.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>LOGIN</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork3.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>GETTING ACQUAINTED</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork4.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>MAKE DEPOSIT</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork5.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>WATCHING PROFITS GROW</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)'}}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork6.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>REINVEST YOUR PROFITS</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork7.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>WITHDRAW</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper sx={{ padding: '20px', background: 'rgba(255,255,255,0.05)'}}>
                            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                                <img src="img/howdoesitwork8.png" alt="" style={{ width: '100px' }} />
                                <Typography sx={{ color: 'white', fontSize: 'bold', fontWeight: 'bold' }}>EARNING AFFILIATES</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>

            </Stack>
        </>
    );
}

export default HowTo;