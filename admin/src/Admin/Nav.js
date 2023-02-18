import { AppBar, Box, Button, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import DraftsIcon from '@mui/icons-material/Drafts';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DashboardIcon from '@mui/icons-material/Dashboard';
import useMediaQuery from '@mui/material/useMediaQuery';
const Nav = () => {
    const md = useMediaQuery('(min-width:1100px)');
    const [checked, setChecked] = useState(false)
    const [open,setOpen] = useState(false)
    const toggleDrawer = (val) => {
        setOpen(val)
    } 
    return (
        <>
            <Paper sx={{ backgroundColor: 'White', padding:{xs:'8px', md:'16px 30px'}, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Stack>
                    <Stack direction="row" sx={{alignItems:'center'}}>
                        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                            <IconButton onClick={() => toggleDrawer(true)}><MenuIcon  /></IconButton>
                            <Drawer
                                anchor={'left'}
                                open={open}
                                onClose={() => toggleDrawer(false)}
                            >
                                <Paper sx={{ minWidth: '50vw', backgroundColor: '#375160', minHeight: '100%' }} onClick={() => setOpen(false)}>
                                    <Stack sx={{ gap: "20px", padding: '20px' }}>
                                        <Link to="messages" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>Messages</Typography></Link>
                                        <Link to="ordersAD" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>Deposits Requests</Typography></Link>
                                        <Link to="withdraw" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>Withdraw Requests</Typography></Link>
                                        <Link to="users" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'white', cursor: "pointer", fontWeight: "700", '&:hover': { color: '#e1c903', transform: 'translateY(-5px)' }, transition: 'transform 0.5s', fontSize: '14px', textTransform: "uppercase", whiteSpace: 'nowrap' }}>Users</Typography></Link>
                                    </Stack>
                                </Paper>
                            </Drawer>
                            </Stack>
                            <Typography sx={{ fontWeight: 'bold', fontSize:{xs:'16px',md:'32px'} }}>ADMIN PANEL</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: '0px', md: '20px' } }}>
                    <Button sx={{ display: 'flex', gap: '5px', color: 'black' }} onClick={() => { localStorage.removeItem('admin'); window.location.reload() }}>
                        <LogoutIcon sx={{ color: 'black' }} />
                    </Button>
                </Stack>
            </Paper>
            <Collapse in={checked}>
                <Stack sx={{ backgroundColor: '#222', display: { xs: 'flex', md: 'none' } }}>
                    <List sx={{ color: 'silver' }}>
                        <Link to="/admin" style={{ textDecoration: 'none', color: 'silver' }}>
                            <ListItem disablePadding sx={{ '&:hover': { color: 'white', '& svg': { color: 'white' } } }}>
                                <ListItemButton>
                                    <DashboardIcon sx={{ color: 'silver', marginRight: '5px' }} />
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="messages" style={{ textDecoration: 'none', color: 'silver' }}>
                            <ListItem disablePadding sx={{ '&:hover': { color: 'white', '& svg': { color: 'white' } } }}>
                                <ListItemButton>
                                    <DraftsIcon sx={{ color: 'silver', marginRight: '5px' }} />
                                    <ListItemText primary="Messages" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="ordersAD" style={{ textDecoration: 'none', color: 'silver' }}>
                            <ListItem disablePadding sx={{ '&:hover': { color: 'white', '& svg': { color: 'white' } } }}>
                                <ListItemButton>
                                    <BeenhereIcon sx={{ color: 'silver', marginRight: '5px' }} />
                                    <ListItemText primary="Orders" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Stack>
            </Collapse>
        </>
    );
}

export default Nav;