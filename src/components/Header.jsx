import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/lg.png'; // Ensure this path is correct

const Header = ({ handleLogout,handleDrawerToggle  }) => {
    const history = useHistory();
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

    const handleOpenLogoutDialog = () => {
        setOpenLogoutDialog(true);
    };

    const handleCloseLogoutDialog = () => {
        setOpenLogoutDialog(false);
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        handleLogout();
        history.push('/Auth');
        setOpenLogoutDialog(false);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
            <Toolbar sx={{ paddingLeft: '24px', paddingRight: '24px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' },color: '#0046fe' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
                        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', color:  '#727272' }}>
                            SI LAPER
                        </Typography>
                    </Box>
                    <IconButton  aria-label="account" onClick={handleOpenLogoutDialog} sx={{ color: '#0046fe' }}>
                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog}>
                <DialogTitle>Logout</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Apakah Anda yakin ingin keluar?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLogoutDialog} color="primary">Cancel</Button>
                    <Button onClick={handleLogoutClick} color="primary">Logout</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Header;
