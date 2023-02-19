import { Paper, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
const Calculator = () => {
    const md = useMediaQuery('(min-width:1100px)');
    const [v, setv] = useState('5% after 2 days');
    const [a,seta] = useState(0)
    const [f,setf] = useState(15)
    const [profit,setprofit] = useState()
    const handleChange = (event) => {
      setv(event.target.value);
      switch (event.target.value) {
        case '5% after 2 days':
            setf(5)
            break;
            case '8% after 2 days':
                setf(8)
            break;
            case '10% after 3 days':
                setf(10)
            break;
            case '15% after 1 week':
                setf(15)
            break;
      
        default:
            break;
      }
    };
    useEffect(()=>{
        setprofit(a/100*f+a)
    },[v,a])
    return (
        <>
            <Stack sx={{ flex: 4, gap: '20px', alignItems: 'center' }}>
                <Stack sx={{ padding: '20px', borderRadius: '10px', backgroundColor: "#2e394275", color: 'white', gap: '20px' }}>
                    <Stack direction="row" sx={{ gap: '20px' }}>
                        <Typography>You Invest $:</Typography>
                        <input type="number" style={{ color: 'white', background: 'transparent' }} value={a} onChange={(e)=>seta(parseInt(e.target.value))}/>
                    </Stack>
                    <FormControl sx={{ m: 1, minWidth: 120,color:'white !important' }}>
                        <Select
                            value={v}
                            onChange={handleChange}
                            displayEmpty
                            sx={{'&>div':{color:'white'}}}
                        >
                            <MenuItem value={'5% after 2 days'}>
                            5% after 2 days
                            </MenuItem>
                            <MenuItem value={'8% after 2 days'}>8% after 2 days</MenuItem>
                            <MenuItem value={'10% after 3 days'}>10% after 3 days</MenuItem>
                            <MenuItem value={'15% after 1 week'}>15% after 1 week</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack direction="row" sx={{ gap: '20px' }}>
                        <Typography>You Earn $:</Typography>
                        <input type="text" style={{ color: 'white', background: 'transparent' }} readonly value={profit}/>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Calculator;