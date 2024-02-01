import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavigationBar = () => {
    return (
        <AppBar position="absolute" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexShrink: 0, color: '#ffffff' }}>Marko Veljkovic CV</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '79%' }}>
                    <Button color="inherit" component={Link} to="/CvIntroduction">CV Introduction</Button>
                    <Button color="inherit" component={Link} to="/VideoGame">Video Game</Button>
                    <Button color="inherit" component={Link} to="/ScrollOfDeconstruction">Scroll of Deconstruction</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
