import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';
import CollectionsIcon from '@mui/icons-material/Collections';
const Menu = () => {
    return (
        <>
            <Stack sx={{backgroundColor:'#222',flex:1,minHeight:'100vh',display:{xs:'none',md:'flex'}}}>
                <List sx={{color:'silver'}}>
                    <Link to="messages" style={{textDecoration:'none',color:'silver'}}>
                    <ListItem disablePadding  sx={{'&:hover': {color:'white','& svg':{color:'white'}}}}>
                        <ListItemButton>
                                <DraftsIcon sx={{color:'silver',marginRight:'5px'}}/>
                            <ListItemText primary="Messages" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <Link to="ordersAD" style={{textDecoration:'none',color:'silver'}}>
                    <ListItem disablePadding  sx={{'&:hover': {color:'white','& svg':{color:'white'}}}}>
                        <ListItemButton>
                                <BeenhereIcon sx={{color:'silver',marginRight:'5px'}}/>
                            <ListItemText primary="Deposit Requests" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <Link to="withdraw" style={{textDecoration:'none',color:'silver'}}>
                    <ListItem disablePadding  sx={{'&:hover': {color:'white','& svg':{color:'white'}}}}>
                        <ListItemButton>
                                <BeenhereIcon sx={{color:'silver',marginRight:'5px'}}/>
                            <ListItemText primary="Withdraw Requests" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <Link to="users" style={{textDecoration:'none',color:'silver'}}>
                    <ListItem disablePadding  sx={{'&:hover': {color:'white','& svg':{color:'white'}}}}>
                        <ListItemButton>
                                <PersonIcon sx={{color:'silver',marginRight:'5px'}}/>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <Link to="kyc" style={{textDecoration:'none',color:'silver'}}>
                    <ListItem disablePadding  sx={{'&:hover': {color:'white','& svg':{color:'white'}}}}>
                        <ListItemButton>
                                <PersonIcon sx={{color:'silver',marginRight:'5px'}}/>
                            <ListItemText primary="KYC" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                </List>
            </Stack>
        </>
    );
}

export default Menu;