import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const drawerWidth = 270;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <Box sx={{ backgroundColor: '#0046fe', color: 'white', height: '100%' }}>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
        <ListItem button component={Link} to="/dashboard" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <HomeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
    </ListItem>

      <ListItem button component={Link} to="/ptsl" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <FeedOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="PTSL" sx={{ color: 'white' }} />
    </ListItem>

    <ListItem button component={Link} to="/layanan" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <TipsAndUpdatesOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Permohonan Layanan" sx={{ color: 'white' }} />
    </ListItem>

      <ListItem button component={Link} to="/profil" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <PeopleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profil Saya" sx={{ color: 'white' }} />
    </ListItem>

          <ListItem button component={Link} to="/review" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <InventoryOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Riview Berkas" sx={{ color: 'white' }} />
    </ListItem>

      <ListItem button component={Link} to="/history" onClick={() => handleDrawerToggle(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff',
                  '& .MuiListItemIcon-root': {
                    color: '#0046fe',
                  },
                  '& .MuiListItemText-root': {
                    color: '#0046fe',
                  },
                },
                borderRadius: '25px 0 0 25px',
              }}
            >
      <ListItemIcon sx={{ color: 'white' }}>
          <HistoryOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="History Berkas" sx={{ color: 'white' }} />
    </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            backgroundColor: '#1976d2', 
            color: 'white',
           
          },
          display: { xs: 'none', md: 'block' }  // Show permanently on larger screens
        }}
        open
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },  // Show temporarily on smaller screens
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            backgroundColor: '#1976d2', 
            color: 'white',
           
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
