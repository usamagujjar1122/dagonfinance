import { AppBar, Box, Button, Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
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
const Nav = () => {
    const [checked, setChecked] = useState(false)
    const [search, setSearch] = useState()
    return (
        <>
            <Paper sx={{ backgroundColor: 'White', padding: '16px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Stack>
                    <Box>
                        <Typography sx={{fontWeight:'bold',fontSize:'32px'}}>ADMIN PANEL</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: '0px', md: '20px' } }}>
                    <Link to="messages"><IconButton ><EmailIcon /></IconButton></Link>
                    {/* <IconButton><NotificationsIcon /></IconButton> */}
                    <Box sx={{ border: "1px solid green", display: 'flex', justifyContent: 'space-between', display: { xs: 'none', md: 'flex' } }}>
                        <input type="text" style={{ backgroundColor: "transparent", flex: 10, border: 'none', outline: 'none', color: "black", paddingLeft: '10', fontSize: "14px" }} />
                        <Box sx={{ backgroundColor: 'green', padding: '5px', flex: 1 }}><SearchIcon sx={{ color: "white", marginLeft: '2px' }} /></Box>
                    </Box>
                    <Button sx={{ display: 'flex', gap: '5px', color: 'black' }} onClick={()=>{localStorage.removeItem('admin');window.location.reload()}}>
                        <Typography>Logout</Typography>
                        <LogoutIcon sx={{ color: 'black' }} />
                    </Button>
                    <IconButton onClick={() => { setChecked((prev) => !prev) }} sx={{ display: { xs: 'block', md: 'none' } }}><MenuIcon sx={{ fontSize: "30px", display: { xs: 'block', lg: 'none' } }} /></IconButton>
                </Stack>
            </Paper>
            <Collapse in={checked}>
                    <Stack sx={{ backgroundColor: '#222',  display: { xs: 'flex', md: 'none' } }}>
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