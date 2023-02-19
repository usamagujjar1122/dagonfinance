import { Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaddeposits } from "../../Redux/action/userActions";

const Deposits = () => {
    const depositlist = useSelector((state) => state.user.depositlist)
    const deposits = useSelector((state) => state.user.deposits)
    return (
        <>
        { depositlist &&
            <Stack sx={{ flex: 4, gap: '20px' }}>


                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>5% After 2 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1 } }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1,textAlign:'center' } }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1,textAlign:'end' } }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>BASIC</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>$100-$9,999</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'end' }}>5.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack sx={{ backgroundColor: '#d9edf7', padding: '10px 0px', borderRadius: '10px', margin: '10px 0px' }}>
                        {
                            depositlist.map((item) => {
                                if (item.package === "5% after 2 days" && item.status === ("active"))
                                    return (
                                        <>
                                            <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem', color: 'black' } } }}>

                                                <Typography sx={{ fontWeight: '500' }}>DEPOSITED AMOUNT</Typography>
                                                <Typography sx={{ fontWeight: '500' }}>${item.amount}</Typography>
                                            </Stack>
                                        </>
                                    )
                            })}
                        <Typography sx={{ textAlign: 'center', color: 'black' }}>No more deposits for this plan</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>8% After 2 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>STANDARD</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>$10,000-$29,999</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'end' }}>8.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack sx={{ backgroundColor: '#d9edf7', padding: '10px 0px', borderRadius: '10px', margin: '10px 0px' }}>
                        {
                            depositlist.map((item) => {
                                if (item.package === "8% after 2 days" && item.status === ("active"))
                                    return (
                                        <>
                                            <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem', color: 'black' } } }}>

                                                <Typography sx={{ fontWeight: '500' }}>DEPOSITED AMOUNT</Typography>
                                                <Typography sx={{ fontWeight: '500' }}>${item.amount}</Typography>
                                            </Stack>
                                        </>
                                    )
                            })}
                        <Typography sx={{ textAlign: 'center', color: 'black' }}>No more deposits for this plan</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>10% After 3 Days</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>EXTREME</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>$30,000-$999,999</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'end' }}>10.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack sx={{ backgroundColor: '#d9edf7', padding: '10px 0px', borderRadius: '10px', margin: '10px 0px' }}>
                    {
                            depositlist.map((item) => {
                                if (item.package === "10% after 3 days" && item.status === ("active"))
                                    return (
                                        <>
                                            <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem', color: 'black' } } }}>

                                                <Typography sx={{ fontWeight: '500' }}>DEPOSITED AMOUNT</Typography>
                                                <Typography sx={{ fontWeight: '500' }}>${item.amount}</Typography>
                                            </Stack>
                                        </>
                                    )
                            })}
                        <Typography sx={{ textAlign: 'center', color: 'black' }}>No more deposits for this plan</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>15% After 1 Week</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' } ,flex:1}}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'center' }}>SPENT AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'end' }}>PROFIT%</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }}>
                        <Typography sx={{ fontWeight: '500',flex:1, }}>ULTIMATE</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>$100,000-$9,999,999</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'end' }}>15.00</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    <Stack sx={{ backgroundColor: '#d9edf7', padding: '10px 0px', borderRadius: '10px', margin: '10px 0px' }}>
                    {
                            depositlist.map((item) => {
                                if (item.package === "15% after 1 week" && item.status === ("active"))
                                    return (
                                        <>
                                            <Stack direction="row" sx={{ gap: '5px', padding: '10px 0px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem', color: 'black' } } }}>

                                                <Typography sx={{ fontWeight: '500' }}>DEPOSITED AMOUNT</Typography>
                                                <Typography sx={{ fontWeight: '500' }}>${item.amount}</Typography>
                                            </Stack>
                                        </>
                                    )
                            })}
                        <Typography sx={{ textAlign: 'center', color: 'black' }}>No more deposits for this plan</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                </Stack>
            </Stack>
            }
        </>
    );
}

export default Deposits;