import { Button, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { withdrawcommision } from "../../Redux/action/userActions";
const Referals = ({setrefresh}) => {
    const md = useMediaQuery('(min-width:800px)');
    const referals = useSelector(state=>state.user.referals)
    const user = useSelector(state=>state.user.user)
    const deposits = useSelector(state=>state.user.deposits)
    const isLoading = useSelector(state=>state.user.isLoading)
    const dispatch = useDispatch()
    const handleclick = (item) =>{
        const formdata = {
            user:user,
            item:item,
        }
        dispatch(withdrawcommision(formdata,setrefresh))
    }
    return ( 
        <>
        {user && referals &&
         <Stack sx={{ flex: 4,gap:'20px' }}>
                <Stack direction={md?'row':'column'} sx={{ backgroundColor: '#05bca6', padding: '10px 20px', justifyContent: 'space-between', borderRadius: '25px', gap: "30px" }}>
                    <Stack direction="row" sx={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>TOTAL REFERALS</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>{referals.length}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>EARNED COMMISION</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>${deposits.commision}</Typography>
                    </Stack>
                </Stack>

                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white' }}>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px'}}>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem' ,flex:1} }}>USERNAME</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1,textAlign:'center' } }}>COMMISION</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: '#edd50e', fontSize: { xs: '0.8rem', md: '1rem',flex:1,textAlign:'end' } }}>ACTION</Typography>

                    </Stack>
                    <Divider sx={{ backgroundColor: '#edd50e' }} />
                    { referals.map((item)=>(
                        <>
                    <Stack direction="row" sx={{ gap: '5px', justifyContent: 'space-between', padding: '10px', '&>p': { fontSize: { xs: '0.8rem', md: '1rem' } },alignItems:'center' }} ket={item._id}>
                        <Typography sx={{ fontWeight: '500',flex:1 }}>{item.username}</Typography>
                        <Typography sx={{ fontWeight: '500',flex:1,textAlign:'center' }}>$ {item.commision}</Typography>
                        <Stack sx={{flex:1}}><Button sx={{background:"linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))",width:"fit-content",color:'white',borderRadius:'25px',padding:"10px 20px",'&:hover':{boxShadow:'2px 5px 14px 0px rgba(0,0,0,0.75);',background:"linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))"},fontWeight:'bold',marginLeft:'auto'}} onClick={()=>handleclick(item)} disabled={item.commision === 0|| isLoading}>
                        {!isLoading &&<Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>WITHDRAW</Typography>}
                    {isLoading &&<CircularProgress sx={{color:'white', width: "24px !important", height: '24px !important', padding: "0px 8px"}} />}
                            </Button></Stack>
                    </Stack>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                        </>
                    ))
                    }
                </Stack>
        </Stack>
        }
        </>
     );
}
 
export default Referals;