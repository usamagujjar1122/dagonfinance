import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <Stack sx={{}}>
                <Stack  sx={{padding:{xs:'70px 10px',md:'80px 50px'},gap:'20px',backgroundImage:'url(img/mainbanner.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
                    <Stack sx={{maxWidth:'75%'}}>
                    <Typography sx={{fontSize:{xs:'24px',md:'42px'}}}>BUILD YOUR FUTURE WITH</Typography>
                    <Typography sx={{fontSize:{xs:'24px',md:'42px'},fontWeight:'bold'}}>DAGON FINANCE LLC</Typography>
                    </Stack>
                    <Link to="/register" style={{textDecoration:'none'}}><Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold'}}>OPEN ACCOUNT</Button></Link>
                    <Typography sx={{fontSize:{xs:'24px',md:'42px'},fontWeight:'600',maxWidth:'60%'}}>SIGN UP TO GET <span style={{color:'#e1c903'}}> STARTED </span>TO EARN PROFIT</Typography>
                </Stack>
                <Stack sx={{backgroundColor:'#182128',alignItems:'center',padding:{xs:'0px 30px',md:'0px 50px'}}}>
                        <Typography sx={{fontSize:{xs:"20px",md:"42px"},color:'white',padding:{xs:'10px 25px',md:"20px 50px"},background:'rgba(0,0,0,0.5)',borderRadius:'20px 20px 0px 0px',fontWeight:'bold',transform:"translateY(-100%)"}}>INVESTMENT PLANS</Typography>
                        <Grid container spacing={5} sx={{ paddingBottom:"130px"}}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper sx={{borderRadius:'15px'}}>
                                    <Stack sx={{borderRadius:'10px 10px 0px 0px',background:'linear-gradient(90deg,rgba(255,255,255,1) 50%,rgba(236,239,232,1) 50%)',alignItems:'center'}}>
                                        <Typography sx={{backgroundImage:'url(img/planflag.png)',padding:"20px",backgroundRepeat:'no-repeat',backgroundPosition:'center',fontWeight:'bold'}}>STANDARD PLAN</Typography>
                                        <Typography sx={{fontWeight:'bold',fontSize:'50px'}}>15%</Typography>
                                        <Typography sx={{fontWeight:'bold'}}>AFTER 24 HOURS</Typography>
                                    </Stack>
                                    <Stack sx={{borderRadius:'0px 0px 10px 10px',background:'linear-gradient(90deg,rgba(58,72,83,1) 50%,rgba(42,56,66,1) 50%)',alignItems:'center',paddingTop:"10px"}}>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>INVESTMENT RANGE: <span style={{color:'#65e985'}}>$100-50000</span></Typography>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>AFFILIATE BONUS <span style={{color:'#65e985'}}>10%</span></Typography>
                                        <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold',transform:'translateY(15px)'}}>DEPOSIT</Button>
                                    </Stack>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper sx={{borderRadius:'15px'}}>
                                    <Stack sx={{borderRadius:'10px 10px 0px 0px',background:'linear-gradient(90deg,rgba(255,255,255,1) 50%,rgba(236,239,232,1) 50%)',alignItems:'center'}}>
                                        <Typography sx={{backgroundImage:'url(img/planflag.png)',padding:"20px",backgroundRepeat:'no-repeat',backgroundPosition:'center',fontWeight:'bold'}}>MEDIUM PLAN</Typography>
                                        <Typography sx={{fontWeight:'bold',fontSize:'50px'}}>20.2%</Typography>
                                        <Typography sx={{fontWeight:'bold'}}>AFTER 24 HOURS</Typography>
                                    </Stack>
                                    <Stack sx={{borderRadius:'0px 0px 10px 10px',background:'linear-gradient(90deg,rgba(58,72,83,1) 50%,rgba(42,56,66,1) 50%)',alignItems:'center',paddingTop:"10px"}}>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>INVESTMENT RANGE: <span style={{color:'#65e985'}}>$400-100000</span></Typography>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>AFFILIATE BONUS <span style={{color:'#65e985'}}>10%</span></Typography>
                                        <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold',transform:'translateY(15px)'}}>DEPOSIT</Button>
                                    </Stack>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper sx={{borderRadius:'15px'}}>
                                    <Stack sx={{borderRadius:'10px 10px 0px 0px',background:'linear-gradient(90deg,rgba(255,255,255,1) 50%,rgba(236,239,232,1) 50%)',alignItems:'center'}}>
                                        <Typography sx={{backgroundImage:'url(img/planflag.png)',padding:"20px",backgroundRepeat:'no-repeat',backgroundPosition:'center',fontWeight:'bold'}}>PREMIUM PLAN</Typography>
                                        <Typography sx={{fontWeight:'bold',fontSize:'50px'}}>35%</Typography>
                                        <Typography sx={{fontWeight:'bold'}}>AFTER 2 DAYS</Typography>
                                    </Stack>
                                    <Stack sx={{borderRadius:'0px 0px 10px 10px',background:'linear-gradient(90deg,rgba(58,72,83,1) 50%,rgba(42,56,66,1) 50%)',alignItems:'center',paddingTop:"10px"}}>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>INVESTMENT RANGE: <span style={{color:'#65e985'}}>$1800-$999999</span></Typography>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>AFFILIATE BONUS <span style={{color:'#65e985'}}>10%</span></Typography>
                                        <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold',transform:'translateY(15px)'}}>DEPOSIT</Button>
                                    </Stack>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper sx={{borderRadius:'15px'}}>
                                    <Stack sx={{borderRadius:'10px 10px 0px 0px',background:'linear-gradient(90deg,rgba(255,255,255,1) 50%,rgba(236,239,232,1) 50%)',alignItems:'center'}}>
                                        <Typography sx={{backgroundImage:'url(img/planflag.png)',padding:"20px",backgroundRepeat:'no-repeat',backgroundPosition:'center',fontWeight:'bold'}}>ULTIMATE PLAN</Typography>
                                        <Typography sx={{fontWeight:'bold',fontSize:'50px'}}>45%</Typography>
                                        <Typography sx={{fontWeight:'bold'}}>AFTER 1 WEEK</Typography>
                                    </Stack>
                                    <Stack sx={{borderRadius:'0px 0px 10px 10px',background:'linear-gradient(90deg,rgba(58,72,83,1) 50%,rgba(42,56,66,1) 50%)',alignItems:'center',paddingTop:"10px"}}>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>INVESTMENT RANGE: <span style={{color:'#65e985'}}>$4500-999999</span></Typography>
                                        <Typography sx={{fontWeight:'bold',color:'white',fontSize:'14px'}}>AFFILIATE BONUS <span style={{color:'#65e985'}}>10%</span></Typography>
                                          <Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold',transform:'translateY(15px)'}}>DEPOSIT</Button>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                </Stack>
                <Stack sx={{position:'relative',padding:{xs:'0px 30px',md:'0px 50px'},minHeight:'800px',alignItems:'center',backgroundImage:'url(img/aboutbg.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
                    <Stack direction="row" sx={{width:'90%',background:'linear-gradient(90deg,#05bca6 50%,#49d066 50%)',padding:'20px',borderRadius:'50px',justifyContent:'space-between',transform:'translateY(-100%)'}}>
                        <img src="img/dollaricon.png" alt="" style={{width:'50px',height:'50px'}}/>
                        <img src="img/dollaricon.png" alt="" style={{width:'50px',height:'50px'}}/>
                    </Stack>
                    <Stack sx={{position:'relative',background:'url(img/referralbg.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',minWidth:'450px',aspectRatio:'1',alignItems:'center',transform:"translateY(-50%)"}}>
                        <Stack sx={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',gap:"1.6rem",alignItems:'center'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>REFERAL</Typography>
                        <Typography sx={{fontWeight:'900',fontSize:'36px'}}>UPTO 10%</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'28px'}}>BONUS</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{position:'absolute',top:'60%',left:'50%',width:'90%',transform:"translate(-50%,-50%)",background:'rgba(0,0,0,0.5)',alignItems:'center',padding:"20px 0px"}}>
                        <Typography sx={{color:'#35c555',fontSize:{xs:"24px",md:"42px"},fontWeight:'bold'}}>
                                ABOUT DAGON FINANCE LLC
                        </Typography>
                        <Typography sx={{fontWeight:"600",color:'white',padding:'20px',textAlign:'center'}}>
                        Now, the global financial market is more than 14 million Bitcoin's in circulation, which are increasingly affecting many economic processes. The Blockchain technology is ideal for ensuring the security of various transactions related to the trading of securities and other financial assets. Different cryptocurrencies have the potential to displace the traditional payment system as they provide faster payment processing and do not require the provision of personal information. The significant factor in favor of cryptocurrencies is the reduction in the cost of such services. For example, the cost of sending $500 by Bank transfer is on average $50 (10% of the transaction amount)
                        </Typography>
                    <Link to="/aboutus" style={{textDecoration:'none'}}><Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);'},fontWeight:'bold'}}>READ MORE</Button></Link>
                    </Stack>
                </Stack>
                <Stack sx={{display:{xs:"none",md:'block'}}}>
                <iframe allowtransparency="true" frameBorder="0" src="https://www.tradingview-widget.com/embed-widget/screener/?locale=en#%7B%22width%22%3A1200%2C%22height%22%3A523%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22general%22%2C%22market%22%3A%22forex%22%2C%22showToolbar%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22ethricinvest.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22forexscreener%22%7D" style={{boxSizing: "border-box", height: "calc(491px)", width: "100%"}}></iframe>
                </Stack>
                <Stack sx={{backgroundColor:'#182128',padding:{xs:'20px 30px',md:'20px 50px'},alignItems:'center',gap:'20px'}}>
                <Typography sx={{color:'#35c555',fontSize:{xs:"24px",md:"38px"},fontWeight:'bold',marginTop:'40px'}}>
                    DAGONFINANCE.COM <span style={{color:'white '}}>FEATURES</span>
                </Typography>
                <Grid container spacing={5} sx={{}}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon1.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}>STARTING <span style={{color:'#35c555'}}> DOCS</span> PROTECTION</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon2.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}> <span style={{color:'#35c555'}}> AFFORDABLE</span> INVESTMENT PLANS</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon3.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}> REAL<span style={{color:'#35c555'}}> REGISTERED</span> COMPANY</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon4.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}> COMODOV EV<span style={{color:'#35c555'}}> SSL</span> PROTECTION</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon5.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}> <span style={{color:'#35c555'}}> PROFESSIONAL</span> SUPPORT</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{borderRadius:'20px',backgroundColor:'#2e394275',padding:'20px'}}>
                            <Stack direction="row" sx={{alignItems:'center',gap:'18px'}}>
                            <Box sx={{'&:hover':{transform:'translateX(10px)'},transition:'transform 0.5s',cursor:'pointer'}}><img src="img/featuresicon6.png" alt="" style={{width:'60px',}}/></Box>
                            <Typography sx={{fontWeight:'bold',color:'white'}}> <span style={{color:'#35c555'}}> GENUINE</span> INVESTMENT PLATFORM</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
                <Typography sx={{color:'#edd50e',fontSize:{xs:"24px",md:"38px"},fontWeight:'bold',marginTop:'60px'}}>
                    CONTACT <span style={{color:'white '}}>OUR TEAM</span>
                </Typography>
                <Grid container sx={{marginBottom:'50px'}}>
                    <Grid item xs={12} md={4}>
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactlocation.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white',textAlign:'center'}}>85th Floor, Lower Manhattan, Suite 8500,New York, NY 10007, USA</Typography>
                    </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactphone.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white'}}>+16127247789</Typography>
                    </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Stack sx={{alignItems:'center',gap:'10px',padding:'20px','&:hover':{transform:'scale(0.8,0.8)'},transition:'transform 0.5s'}}>
                        <img src="img/contactemail.png" alt="" style={{width:'4rem'}}/>
                        <Typography sx={{fontWeight:'600',color:'white'}}>dagonfinance@gmail.com</Typography>
                    </Stack>
                    </Grid>
                </Grid>
                </Stack>
            </Stack>
        </>
     );
}
 
export default Home;