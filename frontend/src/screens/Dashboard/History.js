import { Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const History = () => {
    const history = useSelector(state=>state.user.history)
    return (
        <>
        {history && 
            <Stack sx={{ flex: 4 }}>
                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1 }}>PLAN</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'center' }}>AMOUNT</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' },flex:1,textAlign:'end' }}>DATE & TIME</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    { history.reverse().map((item)=>
                    { console.log(item)
                    return (
                        <>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } } }} key={item._id}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>{item.type}</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1 ,textAlign:'center'}}>${item.amount}</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1 ,textAlign:'end'}}>{item.createdat.slice(0,19).replace('T', '___')}</Typography>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    </>
                    )})
                    }
                </Stack>
            </Stack>
            }
        </>
    );
}

export default History;